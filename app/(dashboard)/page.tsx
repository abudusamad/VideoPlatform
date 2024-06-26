import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { CardVideo } from "./_components/card-video";
import { Course, MuxData, Video } from "@prisma/client";
import { CourseCard } from "./_components/course-card";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

type AdminIndexPageProps = {
  courses: (Course & {
    videos: (Video & {
      muxData: MuxData | null;
    })[];
  })[];
};
export default function Home({ courses }: AdminIndexPageProps) {
  return (
    <main className="flex h-full flex-col gap-6">
      <Heading as="h1">Draft courses are only visible to you</Heading>
      <Link href="/admin/courses">
        <Button variant="blue">Go to Admin</Button>
      </Link>
      <Container>
        <CardVideo />

        <CourseCard courses={courses} isAdmin />

        <Heading as="h2">No draft courses</Heading>
      </Container>
    </main>
  );
}
