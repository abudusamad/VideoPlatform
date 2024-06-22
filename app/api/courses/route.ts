import getCurrentUser from "@/actions/get-current-user";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import slugify from '@sindresorhus/slugify';


export async function POST(req: Request) {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        const body = await req.json();

        const { name, description } = body;
        if (!name || !description) {
            return new NextResponse("Missing required fields", { status: 400 });
        }

        const course = await db.course.create({
            data: {
                name,
                description,
                 slug: slugify(name),
            author: {
              connect: {
                id: currentUser.id,
              },
              }
            }           
        });

        return NextResponse.json(course);
        
    } catch (error) {
        console.log("[Video Create Error]: ", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}