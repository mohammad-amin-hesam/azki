"use client";

import { Select, SelectItem } from "@/components/ui/select";
import { DefaultInsuranceValues } from "../insurance-types";
import { useDiscount } from "../hooks/use-discount";

export interface DiscountProps {
  onSelect: (data: DefaultInsuranceValues) => void;
}

export function Discount({ onSelect }: DiscountProps) {
  const { discounts, isCompanyDisabled } = useDiscount();

  return (
    <div className="flex flex-col gap-[24px]">
      <Select
        className="w-full lg:flex-1"
        placeholder="درصد تخفیف ثالث"
        disabled={isCompanyDisabled}
        items={discounts}
        onSelect={(selectedDiscount: SelectItem) =>
          onSelect({ personDiscount: selectedDiscount.name })
        }
      />
      <Select
        className="w-full lg:flex-1"
        placeholder="درصد تخفیف حوادث راننده"
        disabled={isCompanyDisabled}
        items={discounts}
        onSelect={(selectedDiscount: SelectItem) =>
          onSelect({ incidentDiscount: selectedDiscount.name })
        }
      />
    </div>
  );
}
