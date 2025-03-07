"use client";

import { CarType } from "./car-type";
import { Footer } from "./footer";
import { useInsuranceFlow } from "../hooks/use-insurance-flow";
import { Company } from "./company";
import { Discount } from "./discount";
import { Fragment } from "react";
import { InsuranceModal } from "../insurance-modal";

export interface CreateInsuranceProps {
  onBackClick: (...args: any[]) => unknown;
}

export function CreateInsurance(props: CreateInsuranceProps) {
  const {
    description,
    footerProps,
    changeInsuranceValues,
    insuranceStep,
    isResultOpen,
    setIsResultOpen,
    insuranceValues,
  } = useInsuranceFlow(props);

  return (
    <Fragment>
      <div className="flex flex-col gap-[42px]">
        <p className="text-medium mb-[48px] mt-[24px] text-[16px] text-gray-500">
          {description}
        </p>
        {insuranceStep === "vehicle" && (
          <CarType onSelect={changeInsuranceValues} />
        )}
        {insuranceStep === "company" && (
          <Company onSelect={changeInsuranceValues} />
        )}
        {insuranceStep === "discount" && (
          <Discount onSelect={changeInsuranceValues} />
        )}
        <Footer {...footerProps} />
      </div>
      <InsuranceModal
        insuranceValues={insuranceValues}
        open={isResultOpen}
        setOpen={setIsResultOpen}
      />
    </Fragment>
  );
}
