import { getVideo } from "@/actions/get-videos";
import { VideoPlayer } from "../_components/video-player";

const CourseIdPage = async ({
  params,
}: {
  params: {
    courseId: string;
    videoId: string;
  };
}) => {
  const { video, muxData } = await getVideo({
    courseId: params.courseId,
    videoId: params.videoId,
  });

  if (!video || !muxData) {
    return <div>Video not found</div>;
  }

  return (
    <div className="flex flex-col max-w-4xl mx-auto pb-20">
      <div className="p-4">
        <VideoPlayer title={video?.title!} playbackId={muxData?.playbackId!} />
      </div>
    </div>
  );
};

export default CourseIdPage;
