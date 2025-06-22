import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPost extends Document {
  userId: mongoose.Types.ObjectId;
  content: string;
  image?: string;
  likeCount: number;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema: Schema<IPost> = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } 
);

export const Post: Model<IPost> =
  mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);
