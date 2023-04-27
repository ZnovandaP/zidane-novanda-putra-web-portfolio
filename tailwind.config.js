/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        quicksand: "Quicksand",
        alkatra: "Alkatra",
        montserrat: "Montserrat",
      },
      colors: {
        "dark-bg": "#18122B",
        "dark-primary": "#393053",
        "dark-secondary": "#443C68",
        "dark-tertiary": "#635985",
        github: "#181717",
        facebook: "#1877F2",
        instagram: "#E4405F",
        whatsapp: "#25D366",
        tiktok: "#000000",
        twitter: "#1DA1F2",
        linkedin: "#0A66C2",
        javascript: "#f5db07",
        axios: "#5A29E4",
        bootstrap: "#7952B3",
        css: "#1572B6",
        html: "#E34F26",
        jquery: "#0769AD",
        sass: "#CC6699",
        git: "#F05032",
        tailwindcss: "#06B6D4",
        webpack: "#19b4ff",
        postman: "#FF6C37",
      },
      screens: {
        md: "760px",
        xl: "1150px",
      },
    },
  },
  plugins: [],
};
