module.exports = {
  content: ["./**/*.htm"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1536px",
      },
      colors: {
        tgi: {
          darkblue: "#004F93",
          green: "#46A941",
          amber: "#FFC73C",
          coral: "#e96b56",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};
