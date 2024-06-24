"use client";

import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FileUpload } from "@/components/file-upload";
import { toast } from "react-toastify";
import { Container } from "@/components/container";
import {  useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { VideoSchema } from "@/schemas";

interface VideoPageProps {
  courseId: string;
}

export const VideoForm = ({ courseId }: VideoPageProps) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof VideoSchema>>({
    resolver: zodResolver(VideoSchema),
    defaultValues: {
      name: " ",
      description: " ",
      videoUrl: " ",
    },
  });
  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof VideoSchema>) => {
    try {
      const response = await axios.post(
        `/api/courses/${courseId}/video`,
        values
      );
      toast.success("Chapter updated");
      router.push(`/admin/courses/${courseId}/video/${response.data.id}`);
    } catch {
      toast.error("Something went wrong");
    }
  };

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
                  <FormLabel className="text-xl">Video Title</FormLabel>
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
                  <FormLabel className="text-xl">Video description</FormLabel>
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
            <FileUpload
              endpoint="videoFile"
              onChange={(url) => {
                form.setValue("videoUrl", url as string);
              }}
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
