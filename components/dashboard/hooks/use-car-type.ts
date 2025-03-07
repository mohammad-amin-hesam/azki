import { useEffect, useState } from "react";
import { CarTypeProps } from "../forms/car-type";
import { fetchVehicleTypes, VehicleUsage } from "@/api/azki-api";
import { SelectItem } from "@/components/ui/select";

export function useCarType({ onSelect }: CarTypeProps) {
  const [vehicles, setVehicles] = useState<SelectItem[]>([]);
  const [vehicleTypes, setVehiclesTypes] = useState<SelectItem[]>([]);
  const isVehicleDisabled = vehicles.length === 0;
  const isVehicleTypeDisabled = vehicleTypes.length === 0;

  useEffect(() => {
    (async () => {
      const vehiclesResponse = await fetchVehicleTypes();
      const vehicleSelectData = vehiclesResponse.map((vehicle) => ({
        value: vehicle.id.toString(),
        name: vehicle.title,
        usages: vehicle.usages,
      }));
      setVehicles(vehicleSelectData);
    })();
  }, []);

  const selectVehicle = (selectedVehicle: SelectItem) => {
    setVehiclesTypes(
      selectedVehicle.usages.map((usage: VehicleUsage) => ({
        value: usage.id,
        name: usage.title,
      }))
    );
    onSelect({
      vehicle: selectedVehicle.name,
      vehicleType: "",
    });
  };

  const selecteVehicleType = (selectVehicleType: SelectItem) => {
    onSelect({
      vehicleType: selectVehicleType.name,
    });
  };

  return {
    selecteVehicleType,
    selectVehicle,
    vehicles,
    vehicleTypes,
    isVehicleTypeDisabled,
    isVehicleDisabled,
  };
}
