import { fetchCampanies } from "@/api/azki-api";
import { SelectItem } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { CompanyProps } from "../forms/company";

export function useCompany({ onSelect }: CompanyProps) {
  const [companies, setCompanies] = useState<SelectItem[]>([]);
  const isCompanyDisabled = companies.length === 0;

  useEffect(() => {
    (async () => {
      const companiesResponse = await fetchCampanies();
      setCompanies(
        companiesResponse.map((company) => ({
          value: company.id.toString(),
          name: company.title,
        }))
      );
    })();
  }, []);

  const selecteCompany = (company: SelectItem) => {
    onSelect({
      company: company.name,
    });
  };

  return { selecteCompany, isCompanyDisabled, companies };
}
