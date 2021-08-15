module.exports = {
  purge: ["./_includes/*.html", "./_layouts/*.html"],
  theme: {
    fontFamily: {
      display: ["Inter", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
