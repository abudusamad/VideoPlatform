import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const Logo = () => {
  return (
    <div className="flex items-center gap-x-2 text-xl">
      <Image
        width={60}
        height={60}
        alt="Logo"
        src="/logo.svg"
        className={cn("font-semibold ", font.className)}
          />
          BrandVid
    </div>
  );
};
