import getCurrentUser from "@/actions/get-current-user";
import { getVideo } from "@/actions/get-videos";
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

  const { video, muxData } = await getVideo({
    courseId: params.courseId,
    videoId: params.videosId,
  });

  return (
    <div className="flex flex-col max-w-4xl mx-auto pb-20">
      <div className="p-4">
        <VideoPlayer
          title={video?.title}
          videoId={params.videosId}
          courseId={params.courseId}
          playbackId={muxData?.playbackId!}
        />
      </div>
    </div>
  );
};

export default VideoIdPage;
