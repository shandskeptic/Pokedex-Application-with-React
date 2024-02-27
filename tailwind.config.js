/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					400: '#3466AF',
					600: '#21386E',
					800: '#1D2C5E',
				},
				secondary: {
					400: '#FFCB05',
					600: '#C7A008',
				},
			},
		},
	},
	plugins: [],
};
