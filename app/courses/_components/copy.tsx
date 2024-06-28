"use client";

import { useOrigin } from "@/app/hooks/use-original";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Course, Video } from "@prisma/client";

import { Check, Copy, Globe } from "lucide-react";
import { useState } from "react";

interface PublishProps {
    video: Video;
    course: Course;
}

export const Copied = ({ video ,course}: PublishProps) => {
  const [copied, setCopied] = useState(false);

  const origin = useOrigin();

  const url = `${origin}/courses/${course.id}/videos/${video.id}`;

  const onCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm">
          Copy
          {video.isPublished && <Globe className="text-sky-500 w-5 h-5 ml-2" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72" align="end" alignOffset={12} forceMount>
        {video.isPublished && (
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <Globe className="text-sky-500 animate-pulse h-4 w-4" />
              <p className="text-xs font-medium text-sky-500">
                Copy to clipboard
              </p>
            </div>
            <div className="flex items-center">
              <input
                className="flex-1 px-2 text-xs border rounded-l-md h-8 bg-muted truncate"
                value={url}
                disabled
              />
              <Button
                onClick={onCopy}
                disabled={copied}
                className="h-8 rounded-l-none"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};
