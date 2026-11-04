import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-xl font-semibold">Page not found.</h1>
      <Link href="/" className="text-sm underline block mt-2">
        Go home
      </Link>
    </div>
  );
}
