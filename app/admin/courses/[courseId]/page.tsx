import getCurrentUser from "@/actions/get-current-user";
import { Container } from "@/components/container";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { CourseUpdate } from "./_components/course-update";
import { ActionForm } from "./_components/action";

const CourseIdPage = async ({
  params,
}: {
  params: {
    courseId: string;
  };
}) => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return redirect("/auth/login");
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
      authorId: currentUser.id,
    },
  });
  if (!course) {
    return redirect("/admin/courses");
  }

  return (
    <Container>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-3xl font-medium">Course setup</h1>
          </div>
          <ActionForm courseId={params.courseId} />
        </div>
        <div>
          <CourseUpdate initialData={course} courseId={course.id} />
        </div>
      </div>
    </Container>
  );
};
export default CourseIdPage;
