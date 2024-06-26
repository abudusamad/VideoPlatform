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
		const course = await db.course.findUnique({
			where: {
                id: params.courseId,
                authorId: currentUser.id,
			},
			include: {
				video: {
					include: {
						muxData: true,
					},
				},
			},
		});
		if (!course) {
			return new NextResponse("Unauthorized", { status: 401 });
		}


		if (
			!course.name ||
			!course.description ||
			!course.imageUrl 
			
		) {
			return new NextResponse("Missing required fields", { status: 400 });
		}

		const publishCourse = await db.course.update({
			where: {
				id: params.courseId,
				authorId: currentUser.id,
			},
			data: {
				isPublished: true,
			},
        });
        
        return NextResponse.json(publishCourse);
	} catch (error) {
		console.log("[COURSE_ID] [UNPUBLISH] [PATCH] [ERROR]", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
