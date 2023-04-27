const contactFeature = () => {
  /* Contact Input */
  const commonInput = document.querySelectorAll(".input");
  const inputName = document.querySelector(".contact-name");
  const inputEmail = document.querySelector(".contact-email");
  const inputMessage = document.querySelector(".contact-message");
  const inputInstitute = document.querySelector(".contact-institute");
  const statementInputName = document.querySelector(".statement-name");
  const statementInputInstitute = document.querySelector(
    ".statement-institute"
  );
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
};

export default contactFeature;