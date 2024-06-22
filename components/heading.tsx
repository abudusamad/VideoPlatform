import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700", "800", "900"],
});

type Props = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontWeight?:
    | "font-thin"
    | "font-extralight"
    | "font-light"
    | "font-normal"
    | "font-medium"
    | "font-semibold"
    | "font-bold"
    | "font-extrabold"
    | "font-black";
};

export const Heading = ({
  children,
  as = "h1",
  fontWeight = "font-bold",
}: Props) => {
  const className = `font-${fontWeight} mb-4 text-slate-600`;

  switch (as) {
    case "h1":
      return (
        <h1 className={`text-4xl ${font.className} mb-8 text-slate-700`}>
          {children}
        </h1>
      );
    case "h2":
      return <h2 className={`text-3xl ${font.className}`}>{children}</h2>;
    case "h3":
      return <h3 className={`text-2xl ${font.className}`}>{children}</h3>;
    case "h4":
      return <h4 className={`text-xl ${font.className}`}>{children}</h4>;
    case "h5":
      return <h5 className={`text-lg ${font.className}`}>{children}</h5>;
    case "h6":
      return <h6 className={`text-base ${font.className}`}>{children}</h6>;
  }
};
