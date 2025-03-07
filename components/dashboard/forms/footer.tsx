"use client";

import { Arrow } from "@/components/icons/arrow";
import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";

export type ButtonType = ComponentProps<typeof Button> & {
  text: string;
};

export interface FooterProps {
  primaryButton?: ButtonType;
  prevButton?: ButtonType;
  nextButton?: ButtonType;
}

export function Footer({
  nextButton,
  prevButton,
  primaryButton,
}: FooterProps) {
  return (
    <div className="flex items-center justify-between gap-[16px]">
      {prevButton && (
        <Button
          variant="outline"
          className="relative"
          {...prevButton}
        >
          <Arrow
            className="absolute bottom-0 right-[16px] top-0 my-auto h-[14px] w-[14px]
              rotate-[180deg]"
          />
          <span className="ml-auto inline-flex">
            {prevButton.text}
          </span>
        </Button>
      )}
      {nextButton && (
        <Button
          variant="outline"
          className="relative"
          {...nextButton}
        >
          <span className="mr-auto inline-flex">
            {nextButton.text}
          </span>
          <Arrow className="absolute bottom-0 left-[16px] top-0 my-auto h-[14px] w-[14px]" />
        </Button>
      )}
      {primaryButton && (
        <Button className="mr-auto" {...primaryButton}>
          {primaryButton?.text}
        </Button>
      )}
    </div>
  );
}
