"use client";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <Container>
        <Heading as="h1">Draft courses are only visible to you</Heading>
        <Link href="/admin/courses">
          <Button variant="blue">Go to Admin</Button>
        </Link>
      </Container>
    </main>
  );
}
