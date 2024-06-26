import getCurrentUser from "@/actions/get-current-user";
import { Container } from "@/components/container";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { CourseUpdate } from "./_components/course-update";
import { IconBadge } from "@/components/icon-badge";
import { Video } from "lucide-react";
import { VideoForm } from "./_components/video-form";
import { ImageForm } from "./_components/image-form";
import { ActionForm } from "./_components/action";
import { Banner } from "@/components/banner";

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

  const requiredFields = [course.name, course.description, course.imageUrl];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <Container>
      {!course.isPublished && (
        <Banner label="This course is unpublished. It will not be visible to the students." />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-3xl font-medium">Course setup</h1>
          </div>
          <ActionForm
            courseId={params.courseId}
            isPublished={course.isPublished}
            disabled={!isComplete}
          />
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6
        mt-16"
        >
          <div>
            <CourseUpdate initialData={course} courseId={course.id} />
            <ImageForm initialData={course} courseId={course.id} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <IconBadge icon={Video} />
            <h2 className="text-xl">Add a video</h2>
            <VideoForm courseId={params.courseId} />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default CourseIdPage;
