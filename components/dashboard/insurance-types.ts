import { ComponentProps } from "react";
import { Footer } from "./forms/footer";

export enum InsuranceStep {
  vehicle = "vehicle",
  company = "company",
  discount = "discount",
}

export interface InsuranceDetails {
  description: string;
  footer: ComponentProps<typeof Footer>;
}

export type InsuranceStepDetails = Record<
  keyof typeof InsuranceStep,
  InsuranceDetails
>;

export const defaultInsuranceValues = {
  vehicle: "",
  vehicleType: "",
  company: "",
  personDiscount: "",
  incidentDiscount: "",
};

export type DefaultInsuranceValues = Partial<
  Record<keyof typeof defaultInsuranceValues, string>
>;
