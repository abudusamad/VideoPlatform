"use client";

import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FileUpload } from "@/components/file-upload";
import { toast } from "react-toastify";

interface VideoPageProps {
  courseId: string;
}

const formSchema = z.object({
  videoUrl: z.string().min(1),
});

export const VideoForm = ({ courseId }: VideoPageProps) => {
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
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
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div>
        <FileUpload
          endpoint="videoFile"
          onChange={(url) => {
            if (url) {
              onSubmit({ videoUrl: url });
            }
          }}
        />
      </div>
    </div>
  );
};

