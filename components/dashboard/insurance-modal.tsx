"use client";

import { MouseEvent, useContext, useRef } from "react";
import { defaultInsuranceValues } from "./insurance-types";
import { AuthContext } from "../providers/auth-provider";

export interface InsuranceModal {
  open?: boolean;
  setOpen?: (isOpen: boolean) => void;
  insuranceValues: typeof defaultInsuranceValues;
}

export function InsuranceModal({
  open,
  setOpen,
  insuranceValues,
}: InsuranceModal) {
  const content = useRef<HTMLDivElement>(null);
  const { user } = useContext(AuthContext);

  const closeModal = (event: MouseEvent<HTMLDivElement>) => {
    if (content.current?.contains(event.target as Node)) return;
    if (setOpen) setOpen(false);
  };

  console.log(insuranceValues);

  return (
    <div
      className={`fixed right-0 top-0 flex flex h-full w-full items-center
        justify-center bg-black/70 backdrop-blur-sm transition-all
        duration-[0.2s] ${ open ? "z-[10] opacity-[1]" : "z-[-1] opacity-0" }`}
      onClick={closeModal}
    >
      <div
        ref={content}
        className="mx-[16px] flex w-full max-w-[400px] flex-col rounded-lg bg-white p-4"
      >
        <div
          className="flex items-center justify-between border-b border-dotted
            border-gray-300 py-[8px]"
        >
          <span>نام</span>
          <span>{user?.firstName}</span>
        </div>
        <div
          className="flex items-center justify-between border-b border-dotted
            border-gray-300 py-[8px]"
        >
          <span>نام خانوادگی</span>
          <span>{user?.lastName}</span>
        </div>
        <div
          className="flex items-center justify-between border-b border-dotted
            border-gray-300 py-[8px]"
        >
          <span>موبایل</span>
          <span>{user?.mobile}</span>
        </div>
        <div
          className="flex items-center justify-between border-b border-dotted
            border-gray-300 py-[8px]"
        >
          <span>خودرو</span>
          <span>{insuranceValues.vehicle}</span>
        </div>
        <div
          className="flex items-center justify-between border-b border-dotted
            border-gray-300 py-[8px]"
        >
          <span>نوع خودرو</span>
          <span>{insuranceValues.vehicleType}</span>
        </div>
        <div
          className="flex items-center justify-between border-b border-dotted
            border-gray-300 py-[8px]"
        >
          <span>شرکت قبلی</span>
          <span>{insuranceValues.company}</span>
        </div>
        <div
          className="flex items-center justify-between border-b border-dotted
            border-gray-300 py-[8px]"
        >
          <span>تخفیف شخص ثالث</span>
          <span>{insuranceValues.personDiscount}</span>
        </div>
        <div
          className="flex items-center justify-between border-dotted border-gray-300
            py-[8px]"
        >
          <span>تخفیف حوادث</span>
          <span>{insuranceValues.incidentDiscount}</span>
        </div>
      </div>
    </div>
  );
}
