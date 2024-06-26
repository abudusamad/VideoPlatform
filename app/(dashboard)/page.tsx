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
  });
  return (
    <main className="mt-20">
      <Container>
        <Link href="/admin/courses">
          <Button variant="blue">Go to Admin</Button>
        </Link>
        <CoursesList
          items={courses.map((course) => ({
            id: course.id,
            name: course.name,
            description: course.description,
            imageUrl: course.imageUrl,
            isPublished: course.isPublished,
            slug: course.slug,
            authorId: course.authorId,
            createdAt: course.createdAt,
            updatedAt: course.updatedAt,
          }))}
        />
      </Container>
    </main>
  );
};

export default HomePage;
