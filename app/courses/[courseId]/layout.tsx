import { db } from "@/lib/db";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { courseId: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
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
  children: React.ReactNode;
}

const CourseIdLayout = ({ children }: CourseIdLayoutProps) => {
  return <div>{children}</div>;
};

export default CourseIdLayout;
