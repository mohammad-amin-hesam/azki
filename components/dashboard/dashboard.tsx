"use client";

import { useState } from "react";
import { Cover } from "../common/cover";
import { InsuranceSelect } from "./insurance-select";
import { CreateInsurance } from "./forms/create-insurance";

export enum Step {
  type = "type",
  body = "body",
  person = "person",
}

type Steps = Record<keyof typeof Step, { title: string }>;

const steps: Steps = {
  type: { title: "انتخاب بیمه" },
  person: { title: "بیمه شخص ثالث" },
  body: { title: "بیمه بدنه" },
};

export function Dashboard() {
  const [step, setStep] = useState<keyof typeof Step>("type");

  return (
    <Cover title={steps[step].title}>
      {step === "type" ? (
        <InsuranceSelect onSelect={setStep} />
      ) : (
        <CreateInsurance
          onBackClick={() => {
            console.log("HAHAHAHAHA XD");
            setStep("type");
          }}
        />
      )}
    </Cover>
  );
}
