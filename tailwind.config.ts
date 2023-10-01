import type { Config } from "tailwindcss";

export default {
  content: ["./src/renderer/**/*.{svelte,js,ts,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
