/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        devblack: "#00030B",
        devblue: "#028DFF",
        devblue2: "#00BEFF",
        devnavy: "#0043FB",
        devdarkblue: "#001030",
        devdarkblue2: "#000817",
        devgray: "#4A5765",
        devash: "#F9F8FE",
        devpaleblue: "#207ECF",
        devred: "#ff1d5e",
        twitter: "#38A1F3",
        linkedin: "#0077B5",
        whatsapp: "#25d366",
        skype: "#00AFF0",
      },
      fontSize: {
        "10xl": "10rem",
      },
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xl2: "1630px",
    },
  },
  plugins: [],
};
