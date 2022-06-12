import * as fku from "./getFakeUsers.js";

const form = document.getElementById("form");
const errMsgCon = document.getElementById("errorMsgCon");

function validateIfInputsAreEmpty() {
  const allInputsElements = [...document.querySelectorAll("input")];
  allInputsElements.forEach((input) => {
    if (input.value === "") {
      input.placeholder = "this is required!";
      input.classList.add("err");
      if (input.classList.contains("notRequired")) {
        input.classList.remove("err");
        input.placeholder = "lastName";
      }
    }
  });
}

form.addEventListener("submit", (e) => {
  validateIfInputsAreEmpty();
  const passwordValue = fku.password.value;
  const passwordValidateValue = fku.passwordValidation.value;
  const loginValue = fku.loginInp.value;
  const firstNameValue = fku.firstNameInp.value;
  const lastNameValue = fku.lastNameInp.value;
  const emailValue = fku.emailInp.value;
  const phoneValue = fku.phoneInp.value;
  const birthdayValue = fku.birthdayInp.value;
  const countryValue = fku.countryInp.value;
  const cityValue = fku.cityInp.value;
  const cityCodeValue = fku.cityCodeInp.value;

  let errValidateArr = [];
  if (passwordValue.length < 6 || passwordValue.lenght > 25) {
    fku.password.classList.add("err");
    errValidateArr.push("wrong password");
    console.log(errValidateArr);
  }
  if (errValidateArr.length > 0) {
    errMsgCon.innerText = errValidateArr;
    errMsgCon.classList.add("active");
    setTimeout(() => {
      errMsgCon.classList.remove("active");
    }, 1500);
  }
});
