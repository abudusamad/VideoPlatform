import getCurrentUser from "@/actions/get-current-user";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
	req: Request,
	{ params }: { params: { courseId: string } }
) {
	try {
		const currentUser = await getCurrentUser()
		const {...values} = await req.json();

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
        const video = await db.video.create({
            data: {
                ...values,
				course: {
					connect: {
						id: params.courseId,
					},
				},
            },
        });

		

		return NextResponse.json(video);
	} catch (error) {
		console.log("[COURSES_CHAPTER_ID]", error);
		return new NextResponse("Internal Error", { status: 500 });
	}
}
