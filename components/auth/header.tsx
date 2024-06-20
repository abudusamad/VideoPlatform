import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div
        className={cn(
          "flex items-center text-2xl font-medium gap-x-2",
          font.className
        )}
      >
        <Image src="/logo.svg" width={50} height={50} alt="logo" />
        Videos
      </div>

      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
