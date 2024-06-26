import getCurrentUser from "@/actions/get-current-user";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
	req: Request,
	{ params }: { params: { courseId: string } }
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

		const unpublishedCourse = await db.course.update({
			where: {
				id: params.courseId,
				authorId: currentUser.id,
			},
			data: {
				isPublished: false,
			},
		});

		return NextResponse.json(unpublishedCourse);
	} catch (error) {
		console.log("[COURSE_ID] [UNPUBLISH] [PATCH] [ERROR]", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
