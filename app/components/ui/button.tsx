import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger-text";
};

const variants = {
  primary: "px-4 py-2 text-sm rounded bg-gray-900 text-white",
  secondary: "px-4 py-2 text-sm rounded border border-gray-300",
  "danger-text": "text-sm text-red-600",
};

export function Button({ variant = "primary", className = "", ...props }: Props) {
  return <button className={`${variants[variant]} ${className}`} {...props} />;
}
