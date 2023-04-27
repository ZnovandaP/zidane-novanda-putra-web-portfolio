const activeNavFeature = () => {
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
  const articles = document.querySelectorAll("article");
  const linkScroll = document.querySelectorAll(".link-scroll");
  const linkScrollMobile = document.querySelectorAll(".link-scroll-mobile");
  window.addEventListener("scroll", function () {
    let current = "";
    articles.forEach((article) => {
      const articleTop = article.offsetTop;
      if (window.scrollY > articleTop - 160) {
        current = article.getAttribute("id");
      }
    });
    linkScroll.forEach((ls) => {
      if (ls.classList.contains(current)) {
        resetActiveClassNavLink();
        ls.classList.add("active-nav");
      } else if (current == "home") {
        ls.classList.remove("active-nav");
      }
    });
    homeButton.forEach((home) => {
      if (home.classList.contains(current)) {
        resetActiveClassNavLink();
        home.classList.add("active-nav-home");
      }
    });

    /* for Mobile */
    linkScrollMobile.forEach((lsm) => {
      if (lsm.classList.contains(current)) {
        resetActiveClassNavLinkMobile();
        lsm.classList.add("active-nav-mobile");
      } else if (current == "home") {
        lsm.classList.remove("active-nav-mobile");
      }
    });
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
};

export default activeNavFeature;
