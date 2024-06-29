
import { getVideo } from "@/actions/get-videos";
import { Copied } from "@/app/courses/_components/copy";
import { VideoPlayer } from "@/app/courses/_components/video-player";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const VideoIdPage = async ({
  params,
}: {
  params: {
    courseId: string;
    videosId: string;
  };
}) => {
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
        <div className="flex items-center justify-between gap-x-4">

          <Copied video={video!} course={course!} />
          <Link href={"/"}>
            <Button variant="blue">
              Home Page
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoIdPage;
