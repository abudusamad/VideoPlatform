import getCurrentUser from "@/actions/get-current-user";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
	req: Request,
	{ params }: { params: { courseId: string } }
) {
	try {
		const currentUser = await getCurrentUser()
		const body = await req.json();

		if (!currentUser) {
			return new NextResponse("Unauthorized", { status: 401 });
		}

		const { title, description, videoUrl,...values } = body;
		if (!title || !description || !videoUrl) {
			return new NextResponse("Missing Required fields",{status:400})
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
		const video = await db.video.create({
			
            data: {
				id: currentUser.id,
				title,
				description,
				videoUrl,
				...values,
				course: {
					connect: {
						id: params.courseId,
					},
				},
            },
        });

		
console.log("video", video)
		return NextResponse.json(video);
	} catch (error) {
		console.log("[COURSES_CHAPTER_ID]", error);
		return new NextResponse("Internal Error", { status: 500 });
	}
}
