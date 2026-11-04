"use server";

import { revalidatePath } from "next/cache";
import { ObjectId } from "mongodb";
import { getSession } from "@/lib/session";
import { db } from "@/lib/db";
import { createNote, deleteNote } from "@/services/note.service";
import { validateNoteContent } from "@/validations/note.schema";

export async function createNoteAction(formData: FormData) {
  const session = await getSession();
  const content = formData.get("content");
  if (!validateNoteContent(content)) throw new Error("Note must be 1-500 characters.");
  await createNote(session.organizationId, session.userId, content);
  revalidatePath("/dashboard");
}

export async function deleteNoteAction(formData: FormData) {
  const session = await getSession();
  const noteId = formData.get("noteId");
  if (typeof noteId !== "string" || !ObjectId.isValid(noteId))
    throw new Error("Missing note.");
  const note = await db.collection("notes").findOne({
    organizationId: session.organizationId,
    _id: new ObjectId(noteId),
  });
  if (!note) throw new Error("Note not found.");
  if (note.authorId !== session.userId && session.role !== "admin")
    throw new Error("Not allowed.");
  await deleteNote(session.organizationId, noteId);
  revalidatePath("/dashboard");
}
