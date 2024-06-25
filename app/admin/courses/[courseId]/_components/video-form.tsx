"use client";

import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FileUpload } from "@/components/file-upload";
import { toast } from "react-toastify";
import { Container } from "@/components/container";
import { useForm } from "react-hook-form";
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
import MuxPlayer from "@mux/mux-player-react";
import { MuxData, Video } from "@prisma/client";

interface VideoPageProps {
  courseId: string;
}

export const VideoForm = ({ courseId }: VideoPageProps) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof VideoSchema>>({
    resolver: zodResolver(VideoSchema),
    defaultValues: {
      title: " ",
      description: " ",
    },
  });
  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof VideoSchema>) => {
    console.log("values", values);
    try {
      const response = await axios.post(`/api/courses/${courseId}`, values);
      toast.success("video created successfully");
      router.push(`/admin/courses/${courseId}/video/${response.data.id}`);
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
          <FormField
            control={form.control}
            name="title"
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
          <div className="flex items-center gap-x-2">
            <Link href={`/admin/courses/${courseId}`}>
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
  );
};
