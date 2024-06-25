import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import getCurrentUser from "@/actions/get-current-user";

const CoursePage = async () => {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        redirect("/auth/login");
    }

  const courses = await db.course.findMany({
    where: {
      authorId: currentUser.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="p-6">
      <div className="containermx-auto py-10">
        <DataTable columns={columns} data={courses} />
      </div>
    </div>
  );
};

export default CoursePage;
