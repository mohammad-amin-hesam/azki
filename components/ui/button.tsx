"use client";

import { ComponentProps } from "react";

export type ButtonProps = {} & ComponentProps<"button">;

export function Button(buttonProps: ButtonProps) {
	const { className, children } = buttonProps;

	return (
		<button
			{...buttonProps}
			className={`bg-primary text-white h-[80px] rounded-[32px]  ${
				className || ""
			}`}
		>
			{children}
		</button>
	);
}
