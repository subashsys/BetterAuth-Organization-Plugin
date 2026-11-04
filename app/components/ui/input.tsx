import type { InputHTMLAttributes } from "react";

export function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full border border-gray-300 rounded px-3 py-2 text-sm ${className}`}
      {...props}
    />
  );
}
