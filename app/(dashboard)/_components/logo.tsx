"use client";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const Logo = () => {
  const router = useRouter();
  return (
    <div
      className="flex items-center gap-x-2 text-xl cursor-pointer"
      onClick={() => router.push("/")}
    >
      <Image
        width={40}
        height={40}
        alt="Logo"
        src="/logo.svg"
        className={cn("font-semibold ", font.className)}
      />
      <span className="hidden md:block">BrandVid</span>
    </div>
  );
};
