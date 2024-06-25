import getCurrentUser from "@/actions/get-current-user";
import { db } from "@/lib/db";
import slugify from "@sindresorhus/slugify";
import { NextResponse } from "next/server";

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
