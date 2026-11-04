import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const field =
  "w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white text-gray-900 placeholder:text-gray-400";

export function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`${field} ${className}`} {...props} />;
}

export function Textarea({ className = "", ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={`${field} min-h-24 ${className}`} {...props} />;
}
