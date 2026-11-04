import { InviteForm } from "@/components/team/invite-form";
import { MemberList } from "@/components/team/member-list";
import { AppShell } from "@/components/app-shell";

export default function TeamPage() {
  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <h1 className="text-xl font-semibold">Team</h1>
        <InviteForm />
        <MemberList />
      </div>
    </AppShell>
  );
}
