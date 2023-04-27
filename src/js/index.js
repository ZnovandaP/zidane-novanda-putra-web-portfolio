import dataProjects from "./data/data.js";
import darkModeFeature from "./view/dark-mode.js";
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
