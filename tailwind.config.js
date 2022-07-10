/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		screens: {
			xs: "375px",
			sm: "600px",
			md: "900px",
			lg: "1200px",
			xl: "1536px",
		},
		fontSize: {
			xs: ".75rem",
			sm: ".875rem",
			tiny: ".875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
			"7xl": "5rem",
		},
		extend: {
			transitionProperty: {
				width: "width",
			},
			colors: {
				mine: {
					default: "#336CFB",
					dark: "#1F58E7",
					hover: "#558EFF",
					light: "#A9C1FD",
					lightest: "#EBF0FF",
				},
			},
		},
	},
	plugins: [require("flowbite/plugin")],
}
