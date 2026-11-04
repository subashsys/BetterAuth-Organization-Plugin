import { db } from "@/lib/db";
import type { Note } from "@/models/note";
import { ObjectId } from "mongodb";

const notes = db.collection<Note>("notes");

export async function listNotes(organizationId: string) {
  return notes.find({ organizationId }).sort({ createdAt: -1 }).toArray();
}

export async function createNote(organizationId: string, authorId: string, content: string) {
  const result = await notes.insertOne({
    organizationId,
    authorId,
    content,
    createdAt: new Date(),
  });
  return result.insertedId;
}

export async function deleteNote(organizationId: string, noteId: string) {
  await notes.deleteOne({ organizationId, _id: new ObjectId(noteId) });
}
