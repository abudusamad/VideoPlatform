"use client";

import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FileUpload } from "@/components/file-upload";

interface VideoProps {
  courseId: string;
}

const formSchema = z.object({
  videoUrl: z.string().min(1),
});
const VideoPage = ({ courseId }: VideoProps) => {
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post(
        `/api/courses/${courseId}/video`,
        values
      );
      router.push(`/admin/courses/${courseId}/video/${response.data.id}`);
      toast.success("Video uploaded");
      console.log("values", values);

      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="relative aspect-video mt-2">
        <div className="text-xs text-muted-foreground mt-4">
          Upload this chapter&apos;s video
        </div>
        <div>
          <FileUpload
            endpoint="video"
            onChange={(url) => {
              if (url) {
                onSubmit({ videoUrl: url });
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4">
            Upload this chapter&apos;s video
          </div>
        </div>
      </div>
      <div className="text-xs text-muted-foreground mt-2"></div>
    </div>
  );
};

export default VideoPage;
