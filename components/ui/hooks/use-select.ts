import { useEffect, useRef, useState } from "react";
import { SelectItem, SelectProps } from "../select";

export function useSelect({
  onSelect,
  placeholder,
  items,
}: SelectProps) {
  const [isSelectBoxOpen, setIsSelectBoxOpen] =
    useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<SelectItem | null>(
    null
  );
  const container = useRef<HTMLDivElement | null>(null);
  const selectValue =
    selectedItem?.name || placeholder || "انتخاب گزینه";

  const closeBoxOnClick = (event: MouseEvent) => {
    if (container.current?.contains(event.target as Node)) return;

    setIsSelectBoxOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", closeBoxOnClick);
    return () => {
      window.removeEventListener("click", closeBoxOnClick);
    };
  }, []);

  useEffect(() => {
    setSelectedItem(null);
  }, [items]);

  const select = (item: SelectItem) => {
    if (onSelect) onSelect(item);
    setSelectedItem(item);
    setIsSelectBoxOpen(false);
  };

  return {
    select,
    isSelectBoxOpen,
    setIsSelectBoxOpen,
    container,
    selectValue,
  };
}
