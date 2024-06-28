import { Course } from "@prisma/client";

import { db } from "@/lib/db";


type CourseProps = Course & {
	video: { id: string }[];
};

type GetCourses = {
	name?: string;
};

export const getCourses = async ({
	name,
}: GetCourses): Promise<CourseProps[]> => {
	try {
		const courses = await db.course.findMany({
			where: {
				isPublished: true,
				name: {
					contains: name,
				},
			},
			include: {
				video: {
					where: {
						isPublished: true,
					},
					select: {
						id: true,
					},
				},
			},
			orderBy: {
				createdAt: "desc",
			},
		});

		return courses
			
	} catch (error) {
		console.log("[GET_COURSES]", error);
		return [];
	}
};
