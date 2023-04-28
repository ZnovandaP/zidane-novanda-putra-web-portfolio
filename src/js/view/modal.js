// Button Triger Modal Field
const buttonDetailProject = document.querySelectorAll(".detail-button");
const modalOverlay = document.querySelector("#modal-overlay");
const buttonCloseModal = document.querySelector(".button-close-modal");
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

const showModalFieldTransition = () => {
  modalOverlay.classList.replace("hidden", "block");
  setTimeout(() => {
    modalOverlay.classList.replace("scale-0", "scale-100");
  }, 500);
};

const hiddenModalFieldTransition = () => {
  modalOverlay.classList.replace("scale-100", "scale-0");
  setTimeout(() => {
    modalOverlay.classList.replace("block", "hidden");
  }, 500);
};

const listTechStackComponent = (techStack) => {
  let result = ``;
  techStack.forEach((list) => {
    result += `<li>${list}</li>`;
  });
  return result;
};

const showModal = (dataProjects) => {
  buttonDetailProject.forEach(btn => {
    btn.addEventListener('click', function() {
      showModalFieldTransition()
      dataProjects.forEach(data => {
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
            `./public/img/projects_image/forModal/${imageFull}`
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
      })
    })
  })
}

const CloseModal= () => {
  // event button close modal
  buttonCloseModal.addEventListener("click", function () {
    hiddenModalFieldTransition();
  });
}

export {CloseModal, showModal}