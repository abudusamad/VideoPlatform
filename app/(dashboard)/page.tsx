import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CoursesList } from "./_components/course-list";
import { db } from "@/lib/db";

const HomePage = async () => {
  const courses = await db.course.findMany({
    where: {
      isPublished: true,
    },
    include: {
      video: {
        where: {
          isPublished: true,
        },
        select: {
          id: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });


  return (
    <main className="mt-20">
      <Container>
        <Link href="/admin/courses">
          <Button variant="blue">Go to Admin</Button>
        </Link>
        <CoursesList items={courses} />
      </Container>
    </main>
  );
};

export default HomePage;
