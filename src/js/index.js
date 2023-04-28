import dataProjects from "./data/data.js";
import {darkModeFeature, changeDarkModeIcon, html} from "./view/dark-mode.js";
import activeNavFeature from "./view/active-nav.js";
import { showModal, CloseModal } from "./view/modal.js";
import contactFeature from "./view/contact.js";
import syncCurrentYearFeature from "./view/sync-year.js";
import scrollRevealFeature from "./view/scroll-reveal.js";
import typeWriterFeature from "./view/type-writer.js";

window,
  addEventListener("DOMContentLoaded", function () {
    activeNavFeature()
    darkModeFeature()
    showModal(dataProjects);
    CloseModal();
    contactFeature()
    syncCurrentYearFeature()
    scrollRevealFeature()
    typeWriterFeature()
  });

  /* kondisi tema awal load pada page berdasarkan data local storage (Web Storage)*/
window.addEventListener("DOMContentLoaded", function () {
  html.classList.replace('light',localStorage.getItem("darkMode"));
  changeDarkModeIcon(html.classList.contains("dark"));
});