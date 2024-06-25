
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import getCurrentUser from "@/actions/get-current-user";

export async function PATCH(
	req: Request,
	{ params }: { params: { courseId: string; videoId: string } }
) {
	try {
        const currentUser = await getCurrentUser();

        if (!currentUser){
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

		const video = await db.video.findUnique({
			where: {
				id: params.videoId,
				courseId: params.courseId,
			},
		});

		const muxData = await db.muxData.findUnique({
			where: {
				videoId: params.videoId,
			},
		});

		if (
			!video ||
			!muxData ||
			!video.title ||
			!video.description ||
			!video.videoUrl
		) {
			return new NextResponse("Missing required fields", { status: 400 });
		}

		const publishedChapter = await db.video.update({
			where: {
				id: params.videoId,
				courseId: params.courseId,
			},
			data: {
				isPublished: true,
			},
		});

		return NextResponse.json(publishedChapter);
	} catch (error) {
		console.log("[CHAPTER_PUBLISH]", error);
		return new NextResponse("Internal Error", { status: 500 });
	}
}
