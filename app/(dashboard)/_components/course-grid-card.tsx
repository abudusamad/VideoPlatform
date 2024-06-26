import { Heading } from "@/components/heading";
import { Course, MuxData, Video } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type Props = {
  isAdmin: boolean;
  course: Course & {
    videos: (Video & {
      muxData: MuxData | null;
    })[];
  };
};

export const CourseGridCard = ({ course, isAdmin }: Props) => {
  const href = isAdmin
    ? `/admin/courses/${course.id}`
    : `/courses/${course.id}`;
  return (
    <>
      <Link href={href}>
        <a className="w-full border rounded-lg transition shadow-sm hover:shadow-md cursor-pointer">
          {course.videos[0]?.muxData?.playbackId && (
            <Image
              className="w-full"
              src={`https://image.mux.com/${course.videos[0]?.muxData?.playbackId}/thumbnail.jpg?width=640`}
              alt={`Video thumbnail preview for ${course.videos[0]?.muxData?.playbackId}`}
              width={320}
              height={240}
            />
          )}

          <div className="p-8">
            {!course && (
              <span className="bg-slate-200 text-slate-700 rounded-full text-xs py-1 px-3 mb-2 inline-block">
                Draft
              </span>
            )}

            <Heading as="h3">{course.name}</Heading>
            <p className="text-slate-700">{course.description}</p>
          </div>
        </a>
      </Link>
    </>
  );
};
