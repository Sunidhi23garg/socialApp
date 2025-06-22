import { connectToDB } from "@/lib/mongodb";
import { Post } from "@/models/Post";
import { User } from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { content, imageUrl, userEmail } = await req.json();
    await connectToDB();

    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const newPost = new Post({
      userId: user._id,
      content,
      image: imageUrl,
      likeCount: 0,
    });

    await newPost.save();
    return NextResponse.json({ message: "Post created successfully" }, { status: 201 });
  } catch (error) {
    console.error("POST /api/posts error:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDB();

    const posts = await Post.find({})
      .sort({ createdAt: -1 })
      .populate("userId", "name image")
      .lean(); 

    const formatted = posts.map((post: any) => ({
      _id: post._id,
      content: post.content,
      image: post.image || '',
      createdAt: post.createdAt,
      likes: post.likeCount || 0,
      user: {
        name: post.userId?.name || "Unknown User",
        image:
          post.userId?.image ||
          `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(post.userId?.name || "User")}`,
      },
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("GET /api/posts error:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}