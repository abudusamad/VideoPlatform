"use client";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div
        className={cn(
          "flex items-center text-2xl font-normal text-gray-500 gap-x-2 cursor-pointer",
          font.className
        )}
        onClick={() => router.push("/")}
      >
        <Image src="/logo.svg" width={50} height={50} alt="logo" />
        BrandVid
      </div>

      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
