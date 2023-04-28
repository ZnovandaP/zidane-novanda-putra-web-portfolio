const html = document.querySelector("html");
const darkModeFeature = () => {
  /* Fitur Dark Mode (local Storage) */
  const darkModeButton = document.querySelectorAll(".dark-mode");

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
};

const changeDarkModeIcon = (isDark) => {
  const darkModeIcon = document.querySelectorAll(".dark-mode-icon");
  darkModeIcon.forEach((icon) => {
    isDark
      ? icon.setAttribute("src", "../public/icon/dark_mode_icon/light-icon.svg")
      : icon.setAttribute("src", "../public/icon/dark_mode_icon/dark-icon.svg");
  });
};

export {darkModeFeature, changeDarkModeIcon, html} ;
