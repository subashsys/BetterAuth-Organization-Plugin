import { createNoteAction } from "@/app/actions/note.actions";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/input";

export function NoteForm() {
  return (
    <form action={createNoteAction} className="space-y-3">
      <Textarea name="content" placeholder="Write a note..." />
      <Button type="submit">Add note</Button>
    </form>
  );
}
