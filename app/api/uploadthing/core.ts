
import getCurrentUser from "@/actions/get-current-user";
import { createUploadthing, type FileRouter } from "uploadthing/next";
const f = createUploadthing();

const handleAuth = async() => {
	const currentUser = await getCurrentUser()
	if (!currentUser) throw new Error("Unauthorized");
	return { currentUser };
};

export const ourFileRouter = {
	courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
		.middleware(() => handleAuth())
		.onUploadComplete(() => {}),
	courseAttachment: f(["text", "image", "video", "audio", "pdf"])
		.middleware(() => handleAuth())
		.onUploadComplete(() => {}),
	video: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
		.middleware(() => handleAuth())
		.onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
