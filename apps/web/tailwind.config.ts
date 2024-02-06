import type { Config } from "tailwindcss"
import {nextui} from "@nextui-org/react";

const config = {
  content: [
    './src/**/*.{ts,tsx}',
    './../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
  plugins: [require("tailwindcss-animate"), nextui()],
} satisfies Config

export default config
