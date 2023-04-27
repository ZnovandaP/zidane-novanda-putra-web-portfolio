const darkModeFeature = () => {
/* Fitur Dark Mode (local Storage) */
const html = document.querySelector("html");
const darkModeButton = document.querySelectorAll(".dark-mode");
const darkModeIcon = document.querySelectorAll(".dark-mode-icon");

const changeDarkModeIcon = (isDark) => {
  darkModeIcon.forEach((icon) => {
    isDark
      ? icon.setAttribute("src", "../public/icon/dark_mode_icon/light-icon.svg")
      : icon.setAttribute("src", "../public/icon/dark_mode_icon/dark-icon.svg");
  });
};

darkModeButton.forEach((btn) => {
  btn.addEventListener("click", function () {
    const isLight = html.classList.contains("light");
    if (isLight) {
      localStorage.setItem("darkMode", "dark");
      html.classList.replace("light", localStorage.getItem("darkMode"));
    } else {
      localStorage.setItem("darkMode", "light");
      html.classList.replace("dark", localStorage.getItem("darkMode"));
    }
    changeDarkModeIcon(isLight);
  });
});
/* kondisi tema awal load pada page berdasarkan data local storage (Web Storage)*/
window.addEventListener("DOMContentLoaded", function () {
  html.classList.add(localStorage.getItem("darkMode"));
  changeDarkModeIcon(html.classList.contains("dark"));
});
}

export default darkModeFeature;