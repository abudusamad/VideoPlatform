"use client";

import { useRouter, usePathname } from "next/navigation";
import { UserMenu } from "./usermenu";
import { useSession } from "next-auth/react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/search-input";

export const Navbar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div className="z-50 bg-background fixed top-0 flex items-center justify-between w-full p-2 border-b-[1px] shadow-sm px-8">
      <div className="flex-grow-0">
        <Logo />
      </div>
      <div className="flex-grow justify-center hidden md:flex">
        <SearchInput/>
      </div>
      <div className="flex flex-end justify-end">
        {!session ? (
          <div className="flex items-center content-between gap-x-4">
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
              Sign Up
            </Button>
          </div>
        ) : (
          <UserMenu />
        )}
      </div>
    </div>
  );
};
