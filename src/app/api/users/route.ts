import { connectToDB } from "@/lib/mongodb";
import { User } from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

  await connectToDB();
  const user = await User.findOne({ email });
  return NextResponse.json({
    name: user.name,
    bio: user.bio || "",
    image: user.image || "",
  });
}

export async function PUT(req: Request) {
  const body = await req.json();
  const { email, bio, image } = body;

  if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });

  await connectToDB();
  await User.findOneAndUpdate({ email }, { bio, image });
  return NextResponse.json({ message: "Profile updated" });
}
