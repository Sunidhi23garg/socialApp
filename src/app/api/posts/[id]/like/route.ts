import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongodb';
import { Post } from '@/models/Post';

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // Await the params to get the id
    const { id: postId } = await context.params;
    
    await connectToDB();
    
    const post = await Post.findById(postId);
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    
    post.likeCount = (post.likeCount || 0) + 1;
    await post.save();
    
    return NextResponse.json({ message: 'Post liked', likeCount: post.likeCount });
  } catch (error) {
    console.error('POST /api/posts/[id]/like error:', error);
    return NextResponse.json({ error: 'Failed to like post' }, { status: 500 });
  }
}



// import { connectToDB } from "@/lib/mongodb";
// import { Post } from "@/models/Post";
// import { NextResponse } from "next/server";

// export async function POST(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectToDB();

//     const post = await Post.findById(params.id);
//     if (!post) {
//       return NextResponse.json({ error: "Post not found" }, { status: 404 });
//     }

//     post.likeCount = (post.likeCount || 0) + 1;
//     await post.save(); 

//     return NextResponse.json({ likeCount: post.likeCount });
//   } catch {
//     return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
//   }
// }