import getCurrentUser from "@/actions/get-current-user";
import { Container } from "@/components/container";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { CourseUpdate } from "./_components/course-update";
import { ActionForm } from "./_components/action";
import Link from "next/link";
import { IconBadge } from "@/components/icon-badge";
import { Video } from "lucide-react";

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
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-3xl font-medium">Course setup</h1>
          </div>
          <ActionForm courseId={params.courseId} />
        </div>
        <div>
          <CourseUpdate initialData={course} courseId={course.id} />
        </div>
        <Link href={`/admin/courses/${course.id}/video/`}>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={Video} />
            <h2 className="text-xl">Add a video</h2>
          </div>
        </Link>
      </div>
    </Container>
  );
};
export default CourseIdPage;
