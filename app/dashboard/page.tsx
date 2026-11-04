import { getSession } from "@/app/lib/session";
import { listNotes } from "@/app/services/note.service";
import { NoteForm } from "@/app/components/notes/note-form";
import { NoteList } from "@/app/components/notes/note-list";
import { AppShell } from "@/app/components/app-shell";

export default async function DashboardPage() {
  const session = await getSession();
  const notes = await listNotes(session.organizationId);

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <NoteForm />
        <NoteList notes={notes} />
      </div>
    </AppShell>
  );
}
