import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-xl font-semibold mb-6">Notes</h1>
      <p className="text-sm text-gray-500">
        Shared notes for you and your team.
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/login"
          className="px-4 py-2 text-sm rounded bg-gray-900 text-white"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 text-sm rounded border border-gray-300"
        >
          Sign up
        </Link>
      </div>
    </main>
  );
}
