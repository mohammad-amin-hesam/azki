import Api from ".";

export interface VehicleUsage {
  id: number;
  title: string;
}

export interface Vehicle {
  id: number;
  title: string;
  usages: VehicleUsage[];
}

export async function fetchVehicleTypes(): Promise<Vehicle[]> {
  const vehiclesResponse = await new Api().get<Vehicle[]>(
    "/product/vehicle/types"
  );

  return vehiclesResponse.data;
}

export interface Campany {
  id: number;
  title: string;
}

export async function fetchCampanies(): Promise<Campany[]> {
  const campaniesResponse = await new Api().get<Campany[]>(
    "/product/third/companies"
  );

  return campaniesResponse.data;
}

export interface Discount {
  id: number;
  title: string;
}

export async function fetchDiscounts(): Promise<Discount[]> {
  const discountsResponse = await new Api().get<Discount[]>(
    "/product/third/third-discounts"
  );

  return discountsResponse.data;
}
