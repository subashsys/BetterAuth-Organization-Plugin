import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-xl font-semibold">Notes</h1>
      <p className="text-sm text-gray-500 mt-2">
        Shared notes for you and your team.
      </p>
      <div className="mt-4 flex gap-3">
        <Link
          href="/login"
          className="bg-gray-900 text-white rounded px-3 py-2 text-sm"
        >
          Login
        </Link>
        <Link href="/signup" className="border border-gray-300 rounded px-3 py-2 text-sm">
          Sign up
        </Link>
      </div>
    </main>
  );
}
