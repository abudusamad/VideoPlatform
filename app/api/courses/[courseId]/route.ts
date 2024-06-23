import getCurrentUser from "@/actions/get-current-user"
import { db } from "@/lib/db";
import { NextResponse } from "next/server"

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