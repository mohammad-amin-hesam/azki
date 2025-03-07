"use client";

import { Select } from "@/components/ui/select";
import { DefaultInsuranceValues } from "../insurance-types";
import { useCompany } from "../hooks/use-company";

export interface CompanyProps {
  onSelect: (data: DefaultInsuranceValues) => void;
}

export function Company(props: CompanyProps) {
  const { isCompanyDisabled, selecteCompany, companies } =
    useCompany(props);

  return (
    <div className="flex flex-col items-center gap-[24px] lg:flex-row">
      <Select
        className="w-full lg:flex-1"
        placeholder="شرکت بیمه‌گر قبلی"
        disabled={isCompanyDisabled}
        items={companies}
        onSelect={selecteCompany}
      />
    </div>
  );
}
