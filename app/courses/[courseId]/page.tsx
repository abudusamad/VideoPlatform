import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      video: {
        where: {
          isPublished: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });


  if (!course) {
    return redirect("/");
  }

  return redirect(`/courses/${course.id}/videos/${course.video[0].id}`);
};

export default CourseIdPage;
