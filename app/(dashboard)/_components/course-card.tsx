import { Course, MuxData, Video } from "@prisma/client";
import { CourseGridCard } from "./course-grid-card";

type Props = {
  isAdmin?: boolean;
  courses: (Course & {
    videos: (Video & {
      muxData: MuxData | null;
    })[];
  })[];
};

export const CourseCard = ({ courses, isAdmin = false }: Props) => {
  return (
    <>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseGridCard key={course.id} course={course} isAdmin={isAdmin} />
        ))}
      </div> */}
    </>
  );
};

