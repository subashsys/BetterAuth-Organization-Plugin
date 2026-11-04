import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger-text";
};

const variants = {
  primary: "bg-gray-900 text-white rounded px-3 py-2 text-sm",
  secondary: "border border-gray-300 rounded px-3 py-2 text-sm",
  "danger-text": "text-red-600 rounded px-3 py-2 text-sm",
};

export function Button({ variant = "primary", className = "", ...props }: Props) {
  return <button className={`${variants[variant]} ${className}`} {...props} />;
}
