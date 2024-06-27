import getCurrentUser from "@/actions/get-current-user";
import { getVideo } from "@/actions/get-videos";
import { Copied } from "@/app/courses/_components/copy";
import { VideoPlayer } from "@/app/courses/_components/video-player";
import { redirect } from "next/navigation";

const VideoIdPage = async ({
  params,
}: {
  params: {
    courseId: string;
    videosId: string;
  };
}) => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/auth/login");
  }

  const { video, course, muxData } = await getVideo({
    courseId: params.courseId,
    videoId: params.videosId,
  });

  return (
    <div className="flex max-w-4xl mx-auto pb-20 mt-5">
      <div className="p-4 flex pl-5">
        <VideoPlayer
          title={video?.title}
          videoId={params.videosId}
          courseId={params.courseId}
          playbackId={muxData?.playbackId!}
        />
        <Copied video={video!} course={course!} />
      </div>
    </div>
  );
};

export default VideoIdPage;
