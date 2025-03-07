import { useState } from "react";
import { CreateInsuranceProps } from "../forms/create-insurance";
import {
  DefaultInsuranceValues,
  defaultInsuranceValues,
  InsuranceStep,
  InsuranceStepDetails,
} from "../insurance-types";

export function useInsuranceFlow({
  onBackClick,
}: CreateInsuranceProps) {
  const [isResultOpen, setIsResultOpen] = useState<boolean>(false);
  const [insuranceValues, setInsuranceValues] = useState(
    defaultInsuranceValues
  );
  const [insuranceStep, setInsuranceStep] =
    useState<keyof typeof InsuranceStep>("vehicle");

  const changeInsuranceValues = (values: DefaultInsuranceValues) => {
    setInsuranceValues({ ...insuranceValues, ...values });
  };

  const insuranceStepDetails: InsuranceStepDetails = {
    vehicle: {
      description: "نوع و مدل خودروی خود را انتخاب کنید",
      footer: {
        prevButton: {
          text: "بازگشت",
          onClick: onBackClick,
        },
        nextButton: {
          text: "مرحله بعد",
          disabled:
            !insuranceValues.vehicle || !insuranceValues.vehicleType,
          onClick: () => setInsuranceStep("company"),
        },
      },
    },
    company: {
      description: "شرکت بیمه‌گر قبلی خود را در این بخش وارد کنید",
      footer: {
        prevButton: {
          text: "بازگشت",
          onClick: () => setInsuranceStep("vehicle"),
        },
        nextButton: {
          text: "مرحله بعد",
          onClick: () => setInsuranceStep("discount"),
          disabled: !insuranceValues.company,
        },
      },
    },
    discount: {
      description:
        "درصد تخفیف بیمه شخص ثالث و حوادث راننده را وارد کنید",
      footer: {
        primaryButton: {
          text: "استعلام قیمت",
          onClick: () => setIsResultOpen(true),
          disabled:
            !insuranceValues.incidentDiscount ||
            !insuranceValues.personDiscount,
        },
      },
    },
  };

  const footerProps = insuranceStepDetails[insuranceStep].footer;
  const description = insuranceStepDetails[insuranceStep].description;

  return {
    footerProps,
    description,
    changeInsuranceValues,
    insuranceStep,
    isResultOpen,
    setIsResultOpen,
    insuranceValues,
  };
}
