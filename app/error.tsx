"use client";

import { Button } from "@/app/components/ui/button";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-xl font-semibold mb-6">Something went wrong.</h1>
      <p className="text-sm text-gray-500">Please try again.</p>
      <div className="mt-4">
        <Button type="button" variant="secondary" onClick={reset}>
          Try again
        </Button>
      </div>
    </div>
  );
}
