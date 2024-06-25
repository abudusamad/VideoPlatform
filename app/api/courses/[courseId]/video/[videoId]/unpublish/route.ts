
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import getCurrentUser from "@/actions/get-current-user";

export async function PATCH(
	req: Request,
	{ params }: { params: { courseId: string; videoId: string } }
) {
	try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
		const ownCourse = await db.course.findUnique({
			where: {
				id: params.courseId,
				authorId: currentUser.id,
			},
		});

		if (!ownCourse) {
			return new NextResponse("Unauthorized", { status: 401 });
		}

		const unpublishedChapter = await db.video.update({
			where: {
				id: params.videoId,
				courseId: params.courseId,
			},
			data: {
				isPublished: false,
			},
		});

		const publishedChaptersInCourse = await db.video.findMany({
			where: {
				courseId: params.courseId,
				isPublished: true,
			},
		});

		if (!publishedChaptersInCourse.length) {
			await db.course.update({
				where: {
					id: params.courseId,
				},
				data: {
					isPublished: false,
				},
			});
		}

		return NextResponse.json(unpublishedChapter);
	} catch (error) {
		console.log("[CHAPTER_UNPUBLISH]", error);
		return new NextResponse("Internal Error", { status: 500 });
	}
}
