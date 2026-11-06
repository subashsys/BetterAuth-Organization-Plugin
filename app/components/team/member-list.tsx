import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/app/lib/auth";

export async function MemberList() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/login");

  // TEMP: until the organization plugin is added, the only member is the current user
  const members = [
    {
      name: session.user.name,
      email: session.user.email,
      role: "owner",
    },
  ];

  return (
    <ul>
      {members.map((member) => (
        <li
          key={member.email}
          className="flex items-start justify-between gap-4 border-b border-gray-200 py-4"
        >
          <div className="space-y-1">
            <p className="text-sm">{member.name}</p>
            <p className="text-xs text-gray-500">{member.email}</p>
          </div>
          <span className="text-xs text-gray-500">{member.role}</span>
        </li>
      ))}
    </ul>
  );
}