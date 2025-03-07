"use client";

export interface FormMessageProps {
  message?: string;
}

export function FormMessage({ message }: FormMessageProps) {
  return message ? (
    <span className="flex text-[12px] font-normal text-red-500">
      {message}
    </span>
  ) : null;
}
