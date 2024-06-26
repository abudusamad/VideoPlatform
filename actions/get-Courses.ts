import { Course } from "@prisma/client";

import { db } from "@/lib/db";


type GetCourses = {
	userId: string;
	name?: string;
	
};

export const getCourses = async ({
	userId,
	name,
}: GetCourses) => {
	try {
        const courses = await db.course.findMany({
            where: {
                isPublished: true,
                name: {
                    contains: name,
                },
                authorId: userId,
            }
        });              

		return courses;
	} catch (error) {
		console.log("[GET_COURSES]", error);
		return [];
	}
};
