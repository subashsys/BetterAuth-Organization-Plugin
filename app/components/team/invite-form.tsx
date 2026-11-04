import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

export function InviteForm() {
  return (
    <form className="flex gap-2">
      <Input type="email" name="email" placeholder="Email address" className="flex-1 min-w-0" />
      <select
        name="role"
        defaultValue="member"
        className="w-32 border border-gray-300 rounded px-3 py-2 text-sm bg-white text-gray-900"
      >
        <option value="member">member</option>
        <option value="admin">admin</option>
      </select>
      <Button type="submit">Invite</Button>
    </form>
  );
}
