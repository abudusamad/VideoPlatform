import { Navbar } from "../(dashboard)/_components/navbar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>
      <Navbar />
      <main className="mt-20 ">{children}</main>
    </div>
  );
};

export default AdminLayout;
