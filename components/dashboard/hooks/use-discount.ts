import { fetchDiscounts } from "@/api/azki-api";
import { SelectItem } from "@/components/ui/select";
import { useEffect, useState } from "react";

export function useDiscount() {
  const [discounts, setDiscounts] = useState<SelectItem[]>([]);
  const isCompanyDisabled = discounts.length === 0;

  useEffect(() => {
    (async () => {
      const discountResponse = await fetchDiscounts();
      setDiscounts(
        discountResponse.map((company) => ({
          value: company.id.toString(),
          name: company.title,
        }))
      );
    })();
  }, []);

  return { isCompanyDisabled, discounts };
}
