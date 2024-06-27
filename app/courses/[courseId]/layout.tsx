import { db } from "@/lib/db";

export async function generateMetada({
  params,
}: {
  params: { courseId: string };
}) {
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
  });

  return {
    title: course?.name,
  };
}

interface CourseIdLayoutProps {
  Children: React.ReactNode;
}

const CourseIdLayout = ({ Children }: CourseIdLayoutProps) => {
  return <div>{Children}</div>;
};

export default CourseIdLayout;
