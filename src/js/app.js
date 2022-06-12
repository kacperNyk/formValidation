import * as fku from "./getFakeUsers.js";

const form = document.getElementById("form");
const errMsgCon = document.getElementById("errorMsgCon");
let errValidateArr = [];

form.addEventListener("submit", (e) => {
  validateInputs();
});

function validateInputs() {
  const passwordValue = fku.password.value;
  const passwordValidateValue = fku.passwordValidation.value;
  const emailValue = fku.emailInp.value;
  //check for all inputs if any is empty
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
  //validate password
  if (passwordValue.length < 6 || passwordValue.lenght > 25) {
    fku.password.classList.add("err");
    errValidateArr.push("wrong password");
  }
  if (!(passwordValue === passwordValidateValue)) {
    errValidateArr.push("passwords doesn't match");
    console.log("kasld");
  }
  if (errValidateArr.length > 0) {
    errMsgCon.innerText = errValidateArr;
    errMsgCon.classList.add("active");
    setTimeout(() => {
      errMsgCon.classList.remove("active");
      errValidateArr = [];
    }, 2000);
  }
  //email
  if (!isEmail(emailValue)) {
    fku.emailInp.value = `"${emailValue} " is not correct email`;
    fku.emailInp.classList.add("err");
  }
  //age
  ValidateAge();
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function ValidateAge() {
  const birthdayValue = fku.birthdayInp.value;
  const regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

  if (regex.test(birthdayValue)) {
    const parts = birthdayValue.split("/");
    const dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
    const dtCurrent = new Date();
    if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
      fku.birthdayInp.value = "You must be 18 years old";
      return false;
    }
    if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {
      if (dtCurrent.getMonth() < dtDOB.getMonth()) {
        return false;
      }
      if (dtCurrent.getMonth() == dtDOB.getMonth()) {
        if (dtCurrent.getDate() < dtDOB.getDate()) {
          return false;
        }
      }
    }
    return true;
  } else {
    fku.birthdayInp.value = "enter like this DD/MM/YYYY";
    fku.birthdayInp.classList.add("err");
    return false;
  }
}
