import { listNotes } from "@/app/services/note.service";
import { NoteForm } from "@/app/components/notes/note-form";
import { NoteList } from "@/app/components/notes/note-list";
import { AppShell } from "@/app/components/app-shell";
import {auth} from "@/app/lib/auth"
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  if(!session){
    redirect("/login")
  }
  const notes = await listNotes(session.user.id);

  return (
    <AppShell>
      <div>
        <h1 className="text-xl font-semibold mb-6">Dashboard</h1>
        <div className="space-y-8">
          <NoteForm />
          <NoteList notes={notes} />
        </div>
      </div>
    </AppShell>
  );
}
