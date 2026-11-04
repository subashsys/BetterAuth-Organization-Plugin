import { InviteForm } from "@/app/components/team/invite-form";
import { MemberList } from "@/app/components/team/member-list";
import { AppShell } from "@/app/components/app-shell";

export default function TeamPage() {
  return (
    <AppShell>
      <div>
        <h1 className="text-xl font-semibold mb-6">Team</h1>
        <InviteForm />
        <div className="mt-8">
          <MemberList />
        </div>
      </div>
    </AppShell>
  );
}
