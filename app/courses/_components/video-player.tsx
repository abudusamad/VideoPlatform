"use client";

import { cn } from "@/lib/utils";
import MuxPlayer from "@mux/mux-player-react";
import { useState } from "react";


interface VideoPlayerProps {
  playbackId: string;
  title: string;
}

export const VideoPlayer = ({
  playbackId,
  title,
}: VideoPlayerProps) => {
  const [isReady, setIsReady] = useState(false);
  return (
    <div className="relative aspect-video">
      <MuxPlayer
        title={title}
        className={cn(!isReady && "hidden")}
        onCanPlay={() => setIsReady(true)}
        autoPlay
        playbackId={playbackId}
      />
    </div>
  );
};
