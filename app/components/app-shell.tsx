import Signout from "../signout/page";
import { NavLinks } from "./nav-links";

export function AppShell({ children }: { children: React.ReactNode }) {
  
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <header className="border-b border-gray-200 pb-4 mb-8">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold">Dashboard</span>
          <Signout/>
        </div>
        <NavLinks />
      </header>
      <main>{children}</main>
    </div>
  );
}
