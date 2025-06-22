import { connectToDB } from '@/lib/mongodb';
import { User } from '@/models/User';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  await connectToDB();
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();

  return NextResponse.json({ message: 'User created' }, { status: 201 });
}
