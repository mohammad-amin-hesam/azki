"use client";

import { FormMessage } from "@/components/ui/form-message";
import { Input } from "@/components/ui/input";
import { ComponentProps } from "react";

export type FormFieldProps = ComponentProps<typeof Input> &
  ComponentProps<typeof FormMessage>;

export function FormField({
  message,
  ...inputProps
}: FormFieldProps) {
  const borderForError = message ? "border-red-500" : "";

  return (
    <div className="flex flex-col gap-[4px] lg:flex-1">
      <Input
        {...inputProps}
        className={`${borderForError} ${inputProps.className || ""}`}
      />
      <FormMessage message={message} />
    </div>
  );
}
