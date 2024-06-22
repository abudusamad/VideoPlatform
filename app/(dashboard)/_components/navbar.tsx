"use client";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className="z-50 bg-background fixed top-0 flex items-center justify-between w-full p-2  border-b-[1px] shadow-md px-8">
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <Button variant="outline" onClick={() => router.push("/auth/login")}>
          Sign In
        </Button>
        <Button
          variant="blue"
          size="default"
          onClick={() => router.push("/auth/register")}
        >
          sign up
        </Button>
      </div>
    </div>
  );
};
