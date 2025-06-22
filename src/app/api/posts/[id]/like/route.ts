import { connectToDB } from "@/lib/mongodb";
import { Post } from "@/models/Post";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();

    const post = await Post.findById(params.id);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    post.likeCount = (post.likeCount || 0) + 1;
    await post.save(); 

    return NextResponse.json({ likeCount: post.likeCount });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}