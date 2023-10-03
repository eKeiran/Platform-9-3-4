/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkslategray: "#1b4965",
        white: "#fff",
        black: "#000",
        firebrick: "#b92323",
        gray: {
          "100": "rgba(255, 255, 255, 0.8)",
          "200": "rgba(255, 255, 255, 0.5)",
        },
        red: "#d30000",
        darkgray: "#9e9e9e",
        lightskyblue: "#84aae2",
        honeydew: "#bee7c7",
        chocolate: "#f28f3b",
        lightgray: "#ccc",
        steelblue: "#366683",
        aliceblue: "#e9f1f6",
        dimgray: "#626262",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "open-sans": "'Open Sans'",
        "playfair-display": "'Playfair Display'",
      },
      borderRadius: {
        "8xs": "5px",
        "6xs": "7px",
        xl: "20px",
        "21xl": "40px",
      },
    },
    fontSize: {
      mini: "0.94rem",
      "3xl": "1.38rem",
      "26xl": "2.81rem",
      smi: "0.81rem",
      "3xs": "0.63rem",
      base: "1rem",
      "31xl": "3.13rem",
      "4xl": "1.44rem",
      "21xl": "2.5rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
