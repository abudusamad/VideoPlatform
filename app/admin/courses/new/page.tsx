"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CreateVideoSchema } from "@/schemas";
import { Container } from "@/components/container";

const AdminNewPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const form = useForm<z.infer<typeof CreateVideoSchema>>({
    resolver: zodResolver(CreateVideoSchema),
    defaultValues: {
      name: " ",
      description: " ",
    },
  });

  const { isSubmitting, isValid } = form.formState;
  const onSubmit = async (values: z.infer<typeof CreateVideoSchema>) => {
    try {
      const response = await axios.post("/api/courses/create", values);
      router.push(`/admin/courses/${response.data.id}`);
      console.log(response.data.id)
      console.log(values)
      toast.success("Course created");
    } catch {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <AdminNewPage.Skeleton />;
  }

  return (
    <Container>
      <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl">Course Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Enter Video title '"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl">Course description</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Enter video description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href="/">
                <Button type="button" variant="ghost">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" disabled={!isValid || isSubmitting}>
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Container>
  );
};

export default AdminNewPage;

AdminNewPage.Skeleton = function AdminNewPageSkeleton() {
  return (
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl">Name your course</h1>
        <p className="text-sm text-slate-600">
          What would you like to name your course? Don&apos;t worry, you can
          change this later.
        </p>
        <div className="space-y-8 mt-8">
          <div className="space-y-4">
            <Skeleton className="w-1/2 h-6" />
            <Skeleton className="w-1/3 h-4" />
          </div>
          <div className="flex items-center gap-x-2">
            <Skeleton className="w-20 h-10" />
            <Skeleton className="w-20 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};
