import getCurrentUser from "@/actions/get-current-user"
import { db } from "@/lib/db";
import { NextResponse } from "next/server"
import slugify from "@sindresorhus/slugify";

export async function PATCH(req: Request, { params }: {
    params:{courseId: string}
}) {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return new NextResponse("Unauthorised", { status: 401 });
        }
       const body = await req.json();

        const { name, description } = body;
        if (!name || !description) {
            return new NextResponse("Missing required fields", { status: 400 });
        }
        
        const course = await db.course.update({
            where: {
                id: params.courseId,
                authorId: currentUser.id
            },
            data: {
                name,
                description
            }
        })
           
        return NextResponse.json(course)
        
    } catch (error) {
        console.log("[COURSE_UPDATE", error)
        return new NextResponse("Internal Server Error", {status: 500})
    }
}

export async function DELETE(
	req: Request,
	{ params }: { params: { courseId: string } }
) {
	try {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			return new NextResponse("Unauthorized", { status: 401 });
		}

		const owncourse = await db.course.findUnique({
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

		if (!owncourse) {
			return new NextResponse("Unauthorized", { status: 401 });
		}
		const deleteCourse = await db.course.delete({
			where: {
				id: params.courseId,
			},
		});

		return NextResponse.json(deleteCourse);
	} catch (error) {
		console.log("[COURSE_ID] [DELETE] [ERROR]", error);
		return new NextResponse("Internal Error", { status: 500 });
	}
}





export async function POST(
	req: Request,
	{ params }: { params: { courseId: string } }
) {
	try {
		const currentUser = await getCurrentUser();
		const body = await req.json();
		if (!currentUser) {
			return new NextResponse("Unauthorized", { status: 401 });
		}
		
		const { title, description} = body;
		if (!title || !description ) {
			return new NextResponse("Missing required fields", { status: 400 });
		}
		const video = await db.video.create({
			
			data: {
				id:currentUser.id,
				title,
				description,
				slug: slugify(title),
				uploader: {
					connect: {
						id: currentUser.id,
					},
				},
				course: {
					connect: {
						id: params.courseId,
					},
				},
			}
        });

		
console.log("video", video)
		return NextResponse.json(video);
	} catch (error) {
		console.log("[COURSES_CHAPTER_ID]", error);
		return new NextResponse("Internal Error", { status: 500 });
	}
}
