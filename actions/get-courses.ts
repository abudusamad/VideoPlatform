import { Course } from "@prisma/client";

import { db } from "@/lib/db";


type CourseProps = Course & {
	video: { id: string }[];
};

type GetCourses = {
	currentUser: string;
	title?: string;
};

export const getCourses = async ({
	currentUser,
	title,
}: GetCourses): Promise<CourseProps[]> => {
	try {
		const courses = await db.course.findMany({
			where: {
				isPublished: true,
				name: {
					contains: title,
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
