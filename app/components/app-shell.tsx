import Link from "next/link";
import { Button } from "@/app/components/ui/button";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <header className="flex items-center justify-between border-b border-gray-200 py-3">
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold">Notes</span>
          <Link href="/dashboard" className="text-sm text-gray-500">
            Dashboard
          </Link>
          <Link href="/team" className="text-sm text-gray-500">
            Team
          </Link>
        </div>
        <Button type="button" variant="secondary">
          Sign out
        </Button>
      </header>
      <main className="mt-6">{children}</main>
    </div>
  );
}
