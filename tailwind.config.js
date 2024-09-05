/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounceHigh: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25px)" }, // Bounce higher
        },
      },
      animation: {
        bounceHigh: "bounceHigh 0.9s infinite", // Adjust speed to be faster
      },
    },
  },
  plugins: [],
};
