"use client";

import { ComponentProps } from "react";

export function Arrow(props: ComponentProps<"svg">) {
  return (
    <>
      <svg
        {...props}
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 444.5 444.5"
        style={{ background: "new 0 0 444.5 444.5" }}
        xmlSpace="preserve"
        fill="currentColor"
      >
        <g>
          <path
            className="st0"
            d="M213.1,222.4L351.9,83.7c7-7,10.6-15.7,10.6-25.8c0-10.2-3.5-18.8-10.6-25.8l-21.4-21.4
      c-7-7-15.7-10.6-25.8-10.6s-18.8,3.5-25.8,10.6L92.6,196.4c-7,7-10.6,15.7-10.6,25.8s3.5,18.8,10.6,25.8L278.8,434
      c7,7,15.7,10.6,25.8,10.6s18.8-3.5,25.8-10.6l21.4-21.4c7-7,10.6-15.6,10.6-25.7c0-10.1-3.5-18.7-10.6-26L213.1,222.4z"
          />
        </g>
      </svg>
    </>
  );
}
