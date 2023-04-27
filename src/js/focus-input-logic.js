const inputName = document.querySelector(".contact-name");
const inputEmail = document.querySelector(".contact-email");
const inputMessage = document.querySelector(".contact-message");
const inputInstitute = document.querySelector(".contact-institute");
const labelName = document.querySelector(".label-name");
const labelEmail = document.querySelector(".label-email");
const labelMessage = document.querySelector(".label-message");
const labelInstitute = document.querySelector(".label-institute");
const buttonSubmit = document.querySelector(".button-submit");

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
  if (input.value.length !== 0) {
    label.classList.replace("label-input-focus", "label-input-active");
  } else {
    label.classList.replace("label-input-active", "label-input-focus");
  }
};
