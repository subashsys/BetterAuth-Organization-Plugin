import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-xl font-semibold mb-6">Page not found.</h1>
      <Link href="/" className="text-sm underline block">
        Go home
      </Link>
    </div>
  );
}
