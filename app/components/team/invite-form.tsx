import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InviteForm() {
  return (
    <form className="flex flex-col gap-2">
      <Input type="email" name="email" placeholder="Email address" />
      <select
        name="role"
        defaultValue="member"
        className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
      >
        <option value="member">member</option>
        <option value="admin">admin</option>
      </select>
      <Button type="submit">Invite</Button>
    </form>
  );
}
