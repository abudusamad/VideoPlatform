import getCurrentUser from "@/actions/get-current-user";
import { VideoForm } from "./_components/video-form";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

const VideoPage = async ({
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
    <div>
      <VideoForm courseId={course.id} />
    </div>
  );
};

export default VideoPage;
