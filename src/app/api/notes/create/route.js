import { connectDB } from "@/lib/mongodb";
import Note from "@/models/Note";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { userId, projectName, work, description, timeTaken, noteDate } =
    await request.json();

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  await connectDB();

  const parsedNoteDate = noteDate
    ? new Date(noteDate)
    : new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      );

  const newNote = new Note({
    userId,
    projectName,
    work,
    description,
    timeTaken,
    noteDate: parsedNoteDate,
  });

  await newNote.save();

  return NextResponse.json(
    { message: "Note created successfully", noteId: newNote._id },
    { status: 201 }
  );
}
