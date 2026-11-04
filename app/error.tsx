"use client";

import { Button } from "@/app/components/ui/button";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-xl font-semibold">Something went wrong.</h1>
      <p className="text-sm text-gray-500 mt-2">Please try again.</p>
      <div className="mt-4">
        <Button type="button" variant="secondary" onClick={reset}>
          Try again
        </Button>
      </div>
    </div>
  );
}
