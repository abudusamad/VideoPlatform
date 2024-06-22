import Navbar from "./_components/navbar";

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default DashBoardLayout;
