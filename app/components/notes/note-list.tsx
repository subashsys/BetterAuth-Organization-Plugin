import { deleteNoteAction } from "@/app/actions/note.actions";
import { Button } from "@/app/components/ui/button";
import type { Note } from "@/app/models/note";

export function NoteList({ notes }: { notes: Note[] }) {
  if (notes.length === 0)
    return <p className="text-sm text-gray-500 py-6">No notes yet.</p>;

  return (
    <ul>
      {notes.map((note) => (
        <li
          key={String(note._id)}
          className="flex items-start justify-between gap-4 border-b border-gray-200 py-4"
        >
          <div className="space-y-1">
            <p className="text-sm">{note.content}</p>
            <p className="text-xs text-gray-500">
              {new Date(note.createdAt).toLocaleDateString()}
            </p>
          </div>
          <form action={deleteNoteAction}>
            <input type="hidden" name="noteId" value={String(note._id)} />
            <Button type="submit" variant="danger-text">
              Delete
            </Button>
          </form>
        </li>
      ))}
    </ul>
  );
}
