import { SessionProvider } from "next-auth/react";
import { Navbar } from "./_components/navbar";

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <>
      <SessionProvider>
        <Navbar />
        {children}
      </SessionProvider>
    </>
  );
};

export default DashBoardLayout;
