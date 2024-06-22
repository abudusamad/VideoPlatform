import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AdminPage = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <Heading> Admin</Heading>
        <Heading as="h2">Your courses</Heading>
        <Link href="/admin/courses/new">
          <Button>Create a course</Button>
        </Link>
      </div>
    </Container>
  );
};

export default AdminPage;
