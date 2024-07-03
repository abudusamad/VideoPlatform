import { db } from "@/lib/db";
import { Video } from "@prisma/client";

interface GetVideoProps {
    courseId: string;
    videoId: string;
}

export const getVideo = async ({
    courseId,
    videoId,
}: GetVideoProps) => {
    try {
    
        const [course, video] = await Promise.all([
            db.course.findUnique({
                where: { id: courseId, isPublished: true },
            }),
            db.video.findUnique({
                where: { id: videoId, isPublished: true },
            }),
        ]);

        if (!course) throw new Error("Course not found");
        if (!video) throw new Error("Video not found");


        let muxData = video ? await db.muxData.findUnique({
            where: { videoId: videoId },
        }) : null;

        return { video, course, muxData };
    } catch (error) {
        console.log("[VIDEO]", error);
        return { video: null, course: null, muxData: null };
    }
};