import getCurrentUser from "@/actions/get-current-user";
import { Container } from "@/components/container";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { CourseUpdate } from "./_components/course-update";

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
  const requiredFields = [course.name, course.description];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields})`;
  const isComplete = requiredFields.every(Boolean);

  return (
    <Container>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-3xl font-medium">Course setup</h1>
            <span className="text-lg text-slate-700">
              Complete all fields {completionText}
            </span>
          </div>
          {/* <ActionForm
            disabled={!isComplete}
            courseId={params.courseId}
            isPublished={course.isPublished}
          /> */}
        </div>
        <div>
          <CourseUpdate initialData={course} courseId={course.id} />
        </div>
      </div>
    </Container>
  );
};
export default CourseIdPage;
