import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Video } from "lucide-react";

import { db } from "@/lib/db";
import { IconBadge } from "@/components/icon-badge";

import { Banner } from "@/components/banner";
import { VideoIdForm } from "./_compoenents/videoId-form";
import getCurrentUser from "@/actions/get-current-user";
import { VideoIdActions } from "./_compoenents/videoId-action-form";
import { Container } from "@/components/container";

const VideoIdPage = async ({
  params,
}: {
  params: { courseId: string; videoId: string };
}) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return redirect("/auth/login");
  }

  const video = await db.video.findUnique({
    where: {
      id: params.videoId,
      courseId: params.courseId,
    },
    include: {
      muxData: true,
    },
  });

  if (!video) {
    return redirect("/");
  }

  const requiredFields = [video.title, video.description, video.videoUrl];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <Container>
      {!video.isPublished && (
        <Banner
          variant="warning"
          label="This video is unpublished. It will not be visible in the course"
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
              Back to course setup
            </Link>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl font-medium">Video Creation</h1>
                <span className="text-sm text-slate-700">
                  Complete all fields {completionText}
                </span>
              </div>
              <VideoIdActions
                disabled={!isComplete}
                courseId={params.courseId}
                videoId={params.videoId}
                isPublished={video.isPublished}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={Video} />
              <h2 className="text-xl">Add a video</h2>
            </div>
            <VideoIdForm
              initialData={video}
              videoId={params.videoId}
              courseId={params.courseId}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default VideoIdPage;
