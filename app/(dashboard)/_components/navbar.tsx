"use client";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { useRouter } from "next/navigation";
import { UserMenu } from "./usermenu";
import { useSession } from "next-auth/react";

export const Navbar = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="z-50 bg-background fixed top-0 flex items-center justify-between w-full p-2  border-b-[1px] shadow-sm px-8">
      <Logo />
      <div className="ml-auto justify-end w-full flex items-center gap-x-2">
        {!session ? (
          <>
            <Button
              variant="outline"
              onClick={() => router.push("/auth/login")}
            >
              Sign In
            </Button>
            <Button
              variant="blue"
              size="default"
              onClick={() => router.push("/auth/register")}
            >
              sign up
            </Button>
          </>
        ) : (
          <>
            <UserMenu />
          </>
        )}
      </div>
    </div>
  );
};
