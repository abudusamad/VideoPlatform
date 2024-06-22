import getCurrentUser from "@/actions/get-current-user";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

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
    })
  return <div>this is course Id page</div>;
};
export default CourseIdPage;
