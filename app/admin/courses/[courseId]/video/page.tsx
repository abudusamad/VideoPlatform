import getCurrentUser from "@/actions/get-current-user";
import { Container } from "@/components/container";
import { db } from "@/lib/db";
import { ArrowLeft, Video } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { VideoActions } from "./_components/video-action";
import { IconBadge } from "@/components/icon-badge";
import { Banner } from "@/components/banner";
import { VideoForm } from "./_components/video-form";

const CourseIdVideoPage = async ({
  params,
}: {
  params: { courseId: string };
}) => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return redirect("/auth/login");
  }

  const video = await db.video.findUnique({
    where: {
      id: currentUser.id,
      courseId: params.courseId,
    },
    include: {
      muxData: true,
    },
  });

  if (!video) {
    return redirect(`/admin/courses/${params.courseId}`);
  }

  const requiredFields = [video.videoUrl];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);
  return (
    <Container>
      {!video.isPublished && (
        <Banner
          variant="warning"
          label="This chapter is unpublished. It will not be visible in the course"
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <Link
              href={`/admin/courses/${params.courseId}`}
              className="flex items-center text-sm hover:opacity-75 transition mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to course update
            </Link>
            <div className="flex items-center justify-between w-full">
              <VideoActions
                disabled={!isComplete}
                courseId={params.courseId}
                isPublished={video.isPublished}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <IconBadge icon={Video} />
          <h2 className="text-xl">Add a video</h2>
        </div>
        <VideoForm initialData={video} courseId={params.courseId} />
      </div>
    </Container>
  );
};

export default CourseIdVideoPage;
