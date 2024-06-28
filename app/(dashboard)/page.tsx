import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CoursesList } from "./_components/course-list";
import { getCourses } from "@/actions/get-courses";


const HomePage = async () => {
  const course = await getCourses({});

  return (
    <main className="mt-20">
      <Container>
        <Link href="/admin/courses">
          <Button variant="blue">Go to Admin</Button>
        </Link>
        <CoursesList items={course} />
      </Container>
    </main>
  );
};

export default HomePage;
