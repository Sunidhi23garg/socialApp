import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  profileImageUploader: f({ image: { maxFileSize: "2MB" } })
    .onUploadComplete(async ({ file }) => {
      console.log("Upload complete", file.url);
    }),

  postImageUploader: f({ image: { maxFileSize: "4MB" } })
    .onUploadComplete(async ({ file }) => {
      console.log("Upload complete", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
