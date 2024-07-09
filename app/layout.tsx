import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/constant";
import { Provider } from "./providers/provider";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "./providers/theme-provider";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ` + siteConfig.name,
  },
  description: siteConfig.description,
  keywords: ["Videos", "Streaming", "Platform"],
  icons: [
    {
      url: "/logo.svg",
      href: "logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            themes={["light", "dark"]}
          >
            <Provider />
            <SessionProvider>{children}</SessionProvider>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
