/* Fitur Active Navigation Link  */
const navLink = document.querySelectorAll(".nav-link");

const resetActiveClassNavLink = () => {
  navLink.forEach((nl) => {
    nl.classList.remove("active-nav");
    nl.classList.remove("active-nav-home");
  });
};

navLink.forEach((nl) => {
  nl.addEventListener("click", function () {
    if (nl.classList.contains("home-button")) {
      resetActiveClassNavLink();
      nl.classList.add("active-nav-home");
    } else {
      resetActiveClassNavLink();
      nl.classList.add("active-nav");
    }
  });
});

/* home button to top event */
const homeButton = document.querySelectorAll(".home-button");
homeButton.forEach((btn) => {
  btn.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
});

/* Fitur Active Navigation Link (Mobile)  */
const navLinkMobile = document.querySelectorAll(".nav-link-mobile");
navLinkMobile.forEach((link) => {
  link.addEventListener("click", function () {
    if (link.classList.contains("home-button")) {
      resetActiveClassNavLinkMobile();
      link.classList.add("active-nav-home");
    } else {
      resetActiveClassNavLinkMobile();
      this.classList.add("active-nav-mobile");
    }
  });
});

const resetActiveClassNavLinkMobile = () => {
  navLinkMobile.forEach((link) => {
    link.classList.remove("active-nav-mobile");
    link.classList.remove("active-nav-home");
  });
};

/* fitur nav active scroll */
const articles = document.querySelectorAll('article')
const linkScroll = document.querySelectorAll('.link-scroll')
const linkScrollMobile = document.querySelectorAll('.link-scroll-mobile')
window.addEventListener('scroll', function () {
  let current = ''
  articles.forEach(article => {
    const articleTop = article.offsetTop
    if (window.scrollY > articleTop -160) {
      current = article.getAttribute('id')
    }
  })
  linkScroll.forEach(ls => {
    if (ls.classList.contains(current)) {
      resetActiveClassNavLink()
      ls.classList.add("active-nav");
    } else if (current == 'home') {
      ls.classList.remove("active-nav");
    }
  })
  homeButton.forEach(home => {
    if (home.classList.contains(current)) {
      resetActiveClassNavLink()
      home.classList.add('active-nav-home')
    }
  })

  /* for Mobile */
  linkScrollMobile.forEach(lsm => {
    if (lsm.classList.contains(current)) {
      resetActiveClassNavLinkMobile()
      lsm.classList.add("active-nav-mobile");
    } else if (current == 'home') {
      lsm.classList.remove("active-nav-mobile");
    }
  })
})



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
  getDataModalBody("../../data/data.json");
});

/* fitur scroll header jika page di scroll ke bawah maka akan hilang dan jika ke atas maka akan muncul lagi */
const headerContainer = document.querySelector("#header-container");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    headerContainer.classList.remove("show-slide-down");
    headerContainer.classList.add("hidden-slide-up");
  } else {
  }
});

let startScroll = window.scrollY;
window.addEventListener("scroll", function () {
  let currentScroll = window.scrollY;
  if (startScroll > currentScroll) {
    headerContainer.classList.remove("hidden-slide-up");
    headerContainer.classList.add("show-slide-down");
  } else {
    headerContainer.classList.remove("show-slide-down");
    headerContainer.classList.add("hidden-slide-up");
  }
  startScroll = currentScroll;
});

// Button Triger Modal Field
const buttonDetailProject = document.querySelectorAll(".detail-button");
const modalOverlay = document.querySelector("#modal-overlay");
const buttonCloseModal = document.querySelector(".button-close-modal");

const showModalField = () => {
  modalOverlay.classList.replace("hidden", "block");
  setTimeout(() => {
    modalOverlay.classList.replace("scale-0", "scale-100");
  }, 500);
};

const hiddenModalField = () => {
  modalOverlay.classList.replace("scale-100", "scale-0");
  setTimeout(() => {
    modalOverlay.classList.replace("block", "hidden");
  }, 500);
};

// event button close modal
buttonCloseModal.addEventListener("click", function () {
  hiddenModalField();
});

/* manipulasai data modal body detail project  */
const modalTitle = document.querySelector("#modal-title");
/* left section */
const imageModal = document.querySelector("#image-modal");
const linkToPDF = document.querySelector("#link-to-pdf");
/* right section */
const modalNameProject = document.querySelector("#modal-name-project");
const modalListTechStack = document.querySelector("#modal-list-tech-stack");
const modalProjectDescription = document.querySelector(
  "#modal-project-description"
);
const linkToRepo = document.querySelector("#link-to-repo");
const linkToVisit = document.querySelector("#link-to-visit");

const getDataModalBody = async (url) => {
  try {
    const get = await fetch(url);
    const response = await get.json();
    const { project } = response;
    buttonDetailProject.forEach((btn) => {
      btn.addEventListener("click", function () {
        showModalField();
        project.forEach((data) => {
          const {
            id,
            projectName,
            imageFull,
            techStack,
            projectDescription,
            linkProject,
            linkRepo,
            linkPDF,
          } = data;
          if (this.dataset.id === id) {
            modalTitle.innerText = `Details Project ${projectName}`;
            /* left section */
            imageModal.setAttribute(
              "src",
              `../public/img/projects_image/forModal/${imageFull}`
            );
            imageModal.setAttribute("alt", `Project ${projectName}`);
            linkToPDF.setAttribute("href", linkPDF);
            /* right section */
            modalNameProject.innerText = projectName;
            modalListTechStack.innerHTML = listTechStackComponent(techStack);
            modalProjectDescription.innerText = projectDescription;
            linkToRepo.setAttribute("href", linkRepo);
            linkToVisit.setAttribute("href", linkProject);
          }
        });
      });
    });
  } catch (error) {
    alert(`Data Project Details Error ${error}`);
  }
};

const listTechStackComponent = (techStack) => {
  let result = ``;
  techStack.forEach((list) => {
    result += `<li>${list}</li>`;
  });
  return result;
};

/* Contact Input */
const commonInput = document.querySelectorAll(".input");
const inputName = document.querySelector(".contact-name");
const inputEmail = document.querySelector(".contact-email");
const inputMessage = document.querySelector(".contact-message");
const inputInstitute = document.querySelector(".contact-institute");
const statementInputName = document.querySelector(".statement-name");
const statementInputInstitute = document.querySelector(".statement-institute");
const statementInputEmail = document.querySelector(".statement-email");
const statementInputMessage = document.querySelector(".statement-message");
const buttonSubmit = document.querySelector(".button-submit");
const labelName = document.querySelector(".label-name");
const labelEmail = document.querySelector(".label-email");
const labelMessage = document.querySelector(".label-message");
const labelInstitute = document.querySelector(".label-institute");

commonInput.forEach((input) => {
  input.addEventListener("input", function () {
    inputValidation();
  });
});

inputName.addEventListener("input", function () {
  activeLabelInput(this, labelName);
});
inputEmail.addEventListener("input", function () {
  activeLabelInput(this, labelEmail);
});
inputMessage.addEventListener("input", function () {
  activeLabelInput(this, labelMessage);
});
inputInstitute.addEventListener("input", function () {
  activeLabelInput(this, labelInstitute);
});

const activeLabelInput = (input, label) => {
  if (input.value.length > 0) {
    label.classList.replace("label-input-focus", "label-input-active");
  } else {
    label.classList.replace("label-input-active", "label-input-focus");
  }
};

const inputValidation = () => {
  let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (inputName.value.length < 3) {
    statementInputName.classList.replace("hidden", "block");
  } else {
    statementInputName.classList.replace("block", "hidden");
  }

  if (inputInstitute.value.length < 3) {
    statementInputInstitute.classList.replace("hidden", "block");
  } else {
    statementInputInstitute.classList.replace("block", "hidden");
  }

  if (inputEmail.value.match(validRegex)) {
    statementInputEmail.classList.replace("block", "hidden");
  } else {
    statementInputEmail.classList.replace("hidden", "block");
  }

  if (inputMessage.value.length < 5) {
    statementInputMessage.classList.replace("hidden", "block");
  } else {
    statementInputMessage.classList.replace("block", "hidden");
  }

  /* button submit after validation */
  if (
    inputName.value.length > 2 &&
    inputInstitute.value.length > 2 &&
    inputMessage.value.length > 4 &&
    inputEmail.value.match(validRegex)
  ) {
    buttonSubmit.style.display = "block";
  } else {
    buttonSubmit.style.display = "none";
  }
};

/* Get Current Year For Footer */
const getCurrentYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const yearFooter = document.querySelector(".year");
yearFooter.innerText = getCurrentYear();

let slideLeft = {
  distance: '150%',
  origin: 'left',
  opacity: 0,
  duration:1200,
};

ScrollReveal().reveal('.container', slideLeft);
ScrollReveal().reveal('footer', {
  distance: '150%',
  origin: 'bottom',
  opacity: 0,
  duration:1200,
});
ScrollReveal().reveal('.card', {
  distance: '150%',
  origin: 'right',
  opacity: 0,
  duration:1000,
});
ScrollReveal().reveal('.skills-reveal', {
  distance: '150%',
  origin: 'left',
  opacity: 0,
  duration:1000,
});


let typewriter = new Typewriter('code', {
  loop:true,
  delay: 80,
});

typewriter
  .pauseFor(1000)
  .typeString('Junior Front-End Web Developer')
  .start();