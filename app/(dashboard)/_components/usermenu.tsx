"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { signOut, useSession } from "next-auth/react";
import { AvatarImg } from "./avatarImg";
import { MenuIcon } from "lucide-react";

export const UserMenu = () => {


  const { data: session } = useSession();

  return (
    <div className="relative">
     

        <div
          className="
          p-2
       md:py-1
        md:px-4
        border-[1px]
        border-neutral-200
        rounded-full
        transition-all
        duration-200
        ease-in-out
        hover:shadow-md
        flex
        items-center

        "
        >
          <Popover>
            <PopoverTrigger asChild>
              <div className="cursor-pointer flex items-center gap-3 ">
                <MenuIcon size={24} />
                <AvatarImg src={session?.user?.image} alt="user" />
              </div>
            </PopoverTrigger>
            <PopoverContent>
             
               
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => signOut()}
                  className="w-full text-center"
                >
                  Logout
                </Button>
            
            </PopoverContent>
          </Popover>
       </div>
    </div>
  );
};
