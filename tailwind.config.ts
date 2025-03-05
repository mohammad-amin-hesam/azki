/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const config = {
	darkMode: ["class"],
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	purge: [],
	theme: {
		extend: {
			colors: {
				...colors,
				// primary: {
				// 	DEFAULT: "#25b79b",
				// 	foreground: "#ffffff",
				// },
				primary: "#25b79b",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

export default config;
