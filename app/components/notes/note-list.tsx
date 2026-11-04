import { deleteNoteAction } from "@/app/actions/note.actions";
import { Button } from "@/components/ui/button";
import type { Note } from "@/models/note";

export function NoteList({ notes }: { notes: Note[] }) {
  if (notes.length === 0) return <p className="text-sm text-gray-500 py-3">No notes yet.</p>;

  return (
    <ul>
      {notes.map((note) => (
        <li key={String(note._id)} className="border-b border-gray-200 py-3">
          <p className="text-sm">{note.content}</p>
          <div className="mt-1 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {new Date(note.createdAt).toLocaleDateString()}
            </span>
            <form action={deleteNoteAction}>
              <input type="hidden" name="noteId" value={String(note._id)} />
              <Button type="submit" variant="danger-text">
                Delete
              </Button>
            </form>
          </div>
        </li>
      ))}
    </ul>
  );
}
