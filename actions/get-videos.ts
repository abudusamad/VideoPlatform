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
		
		const course = await db.course.findUnique({
			where: {
				isPublished: true,
				id: courseId,
			},
		
		});

		const video = await db.video.findUnique({
            where: {
            id: videoId,
			isPublished: true,
			},
		});

		if ( !course) {
			throw new Error("Video or course not found");
        }
        
        let muxData = null;
        if (video) {
            muxData = await db.muxData.findUnique({
                where: {
                    videoId: videoId,
                },
            });
        }


		return {
			video,
			course,
			muxData
        };
            
	} catch (error) {
		console.log("[VIDEO]", error);
		return {
			video: null,
			course: null,
			muxData: null,
		};
	}
};
