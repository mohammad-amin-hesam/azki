"use client";

import { Step } from "./dashboard";
import { SelectButton } from "./select-button";

export interface InsuranceSelectProps {
  onSelect: (step: keyof typeof Step) => void;
}

export function InsuranceSelect({ onSelect }: InsuranceSelectProps) {
  return (
    <div className="flex items-center gap-[24px]">
      <SelectButton
        title="شخص ثالث"
        onClick={() => onSelect("person")}
      />
      <SelectButton title="بدنه" onClick={() => onSelect("body")} />
    </div>
  );
}
