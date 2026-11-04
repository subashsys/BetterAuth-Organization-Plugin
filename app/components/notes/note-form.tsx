import { createNoteAction } from "@/app/actions/note.actions";
import { Button } from "@/components/ui/button";

export function NoteForm() {
  return (
    <form action={createNoteAction} className="flex flex-col gap-2">
      <textarea
        name="content"
        rows={3}
        placeholder="Write a note..."
        className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
      />
      <Button type="submit">Add note</Button>
    </form>
  );
}
