import { connectDB } from "@/lib/mongodb";
import Note from "@/models/Note";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  await connectDB();

  const userNotes = await Note.find({ userId }).sort({ createdAt: -1 });

  return NextResponse.json(userNotes, { status: 200 });
}
