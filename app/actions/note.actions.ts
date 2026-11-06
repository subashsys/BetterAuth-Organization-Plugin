"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { ObjectId } from "mongodb";
import { db } from "@/app/lib/db";
import { auth } from "@/app/lib/auth";
import { createNote, deleteNote } from "@/app/services/note.service";
import { validateNoteContent } from "@/app/validations/note.schema";

async function requireSession() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) throw new Error("Unauthorized.");
  return session;
}

export async function createNoteAction(formData: FormData) {
  const session = await requireSession();
  const userId = session.user.id;

  const content = formData.get("content");
  if (!validateNoteContent(content)) {
    throw new Error("Note must be 1-500 characters.");
  }

  // TEMP: user id is used as the organization id
  await createNote(userId, userId, content);
  revalidatePath("/dashboard");
}

export async function deleteNoteAction(formData: FormData) {
  const session = await requireSession();
  const userId = session.user.id;

  const noteId = formData.get("noteId");
  if (typeof noteId !== "string" || !ObjectId.isValid(noteId)) {
    throw new Error("Missing note.");
  }

  const note = await db.collection("notes").findOne({
    organizationId: userId, // TEMP
    _id: new ObjectId(noteId),
  });
  if (!note) throw new Error("Note not found.");

  // TEMP: only the author can delete (admin role comes with the organization plugin)
  if (note.authorId !== userId) throw new Error("Not allowed.");

  await deleteNote(userId, noteId); // TEMP
  revalidatePath("/dashboard");
}