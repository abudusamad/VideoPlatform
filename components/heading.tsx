import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700", "800", "900"],
});

type Props = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontWeight?: "200" | "400" | "600" | "700" | "800" | "900"; 
};

export const Heading = ({ children, as = "h1", fontWeight = "700" }: Props) => {
  const className = `font-poppins font-${fontWeight} mb-4 text-slate-600`;

  switch (as) {
    case "h1":
      return (
        <h1 className={`text-4xl ${className} mb-8 text-slate-700`}>
          {children}
        </h1>
      );
    case "h2":
      return <h2 className={`text-3xl ${className}`}>{children}</h2>;
    case "h3":
      return <h3 className={`text-2xl ${className}`}>{children}</h3>;
    case "h4":
      return <h4 className={`text-xl ${className}`}>{children}</h4>;
    case "h5":
      return <h5 className={`text-lg ${className}`}>{children}</h5>;
    case "h6":
      return <h6 className={`text-base ${className}`}>{children}</h6>;

    default:
      return null;
  }
};
