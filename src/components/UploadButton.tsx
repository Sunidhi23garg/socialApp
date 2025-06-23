'use client';
import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

interface Props {
  onUploadComplete: (url: string) => void;
}

export default function ImageUpload({ onUploadComplete }: Props) {
  return (
    <UploadButton<OurFileRouter, "profileImageUploader">
      endpoint="profileImageUploader"
      onClientUploadComplete={(res) => {
        if (res && res[0]?.ufsUrl) {
          onUploadComplete(res[0].ufsUrl);
        }
      }}
      onUploadError={(error: Error) => alert(`Upload error: ${error.message}`)}
    />
  );
}
