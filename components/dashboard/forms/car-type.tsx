"use client";

import { Select } from "@/components/ui/select";
import { DefaultInsuranceValues } from "../insurance-types";
import { useCarType } from "../hooks/use-car-type";

export interface CarTypeProps {
  onSelect: (data: DefaultInsuranceValues) => void;
}

export function CarType(props: CarTypeProps) {
  const {
    isVehicleTypeDisabled,
    selectVehicle,
    selecteVehicleType,
    vehicleTypes,
    vehicles,
    isVehicleDisabled,
  } = useCarType(props);

  return (
    <div className="flex flex-col items-center gap-[24px] lg:flex-row">
      <Select
        className="w-full lg:flex-1"
        placeholder="نوع خودرو"
        items={vehicles}
        disabled={isVehicleDisabled}
        onSelect={selectVehicle}
      />
      <Select
        className="w-full lg:flex-1"
        placeholder="مدل خودرو"
        items={vehicleTypes}
        disabled={isVehicleTypeDisabled}
        onSelect={selecteVehicleType}
      />
    </div>
  );
}
