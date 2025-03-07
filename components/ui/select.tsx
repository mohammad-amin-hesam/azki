"use client";

import { ChevronDown } from "lucide-react";
import { useSelect } from "./hooks/use-select";
import { ComponentProps } from "react";

export type SelectItem = {
  name: string;
  value: string;
} & Record<any, any>;

export interface SelectProps {
  items: SelectItem[];
  placeholder?: string;
  disabled?: boolean;
  onSelect?: (selecteItem: SelectItem) => void;
}

export function Select({
  items,
  placeholder,
  onSelect,
  className,
  disabled = false,
  ...containerProps
}: SelectProps & Omit<ComponentProps<"div">, "onSelect">) {
  const {
    container,
    isSelectBoxOpen,
    select,
    selectValue,
    setIsSelectBoxOpen,
  } = useSelect({ placeholder, onSelect, items });

  return (
    <div
      ref={container}
      {...containerProps}
      className={`relative ${className}`}
    >
      <div
        className={` relative flex h-[60px] items-center justify-between rounded-[4px]
          border border-gray-300 px-[16px] ${
          disabled
              ? "cursor-not-allowed opacity-[0.5]"
              : "hover:border-primary cursor-pointer"
          }`}
        onClick={() => {
          if (disabled) return;
          setIsSelectBoxOpen(!isSelectBoxOpen);
        }}
      >
        <span className="text-gray-500">{selectValue}</span>
        <ChevronDown className="h-[18px] w-[18px] text-gray-500" />
      </div>
      {isSelectBoxOpen && (
        <div
          className="absolute right-0 top-[calc(100%+2px)] z-[5] h-[300px] w-full
            overflow-y-auto border border-gray-300 bg-gray-50 transition-all"
        >
          {items.map((item, index) => {
            return (
              <div
                key={`select-item-${index}-${item.value}`}
                className="flex cursor-pointer border-b border-gray-200 px-[16px] py-[12px]
                  transition-all hover:bg-gray-100"
                onClick={() => select(item)}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
