import Link from "next/link";
import { Button } from "@/app/components/ui/button";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <header className="flex items-center justify-between border-b border-gray-200 pb-4 mb-8">
        <div className="flex gap-4 items-center">
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
      <main>{children}</main>
    </div>
  );
}
