import { getSession } from "@/lib/session";
import { Button } from "@/components/ui/button";

const members = [
  { name: "Ada Lovelace", email: "ada@example.com", role: "admin" },
  { name: "Alan Turing", email: "alan@example.com", role: "member" },
  { name: "Grace Hopper", email: "grace@example.com", role: "member" },
];

export async function MemberList() {
  const session = await getSession();

  return (
    <ul>
      {members.map((member) => (
        <li
          key={member.email}
          className="border-b border-gray-200 py-3 flex items-center justify-between"
        >
          <div>
            <p className="text-sm">{member.name}</p>
            <p className="text-sm text-gray-500">{member.email}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">{member.role}</span>
            {session.role === "admin" && (
              <Button type="button" variant="danger-text">
                Remove
              </Button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
