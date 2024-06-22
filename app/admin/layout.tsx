import { Navbar } from "../(dashboard)/_components/navbar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default AdminLayout;
