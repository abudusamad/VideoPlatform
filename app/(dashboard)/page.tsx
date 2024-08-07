import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CoursesList } from "./_components/course-list";
import { RoleGate } from "@/components/role-gate";
import { UserRole } from "@prisma/client";

import { FormSuccessDb } from "@/components/form-sucess-db";
import { currentRole } from "@/lib/auth";
import { getCourses } from "@/actions/get-courses";
import { Suspense } from "react";

interface searchParams {
  name: string;
}

const HomePage = async ({ searchParams }: { searchParams: searchParams }) => {
  const course = await getCourses(searchParams);

  const currentUserRole = await currentRole();

  return (
    <main className="mt-20">
      <Container>
        <Suspense>
          <div className="flex flex-col gap-4 ">
            <RoleGate allowedRole={UserRole.ADMIN}>
              <FormSuccessDb message="You have permission  Add Course!" />
            </RoleGate>
            {currentUserRole === UserRole.ADMIN && (
              <Link href="/admin/courses">
                <Button variant="blue">Go to Admin</Button>
              </Link>
            )}
          </div>
          <CoursesList items={course} />
        </Suspense>
      </Container>
    </main>
  );
};

export default HomePage;
