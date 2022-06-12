const API_URL = "https://randomuser.me/api/";
const loginInp = document.getElementById("login");
const firstNameInp = document.getElementById("firstName");
const lastNameInp = document.getElementById("lastName");
const phoneInp = document.getElementById("phone");
const countryInp = document.getElementById("country");
const cityInp = document.getElementById("city");
const cityCodeInp = document.getElementById("cityCode");
export const birthdayInp = document.getElementById("birthday");
export const emailInp = document.getElementById("email");
export const password = document.getElementById("password");
export const passwordValidation = document.getElementById("passwordValidation");
const generateUserBtn = document.getElementById("generateBtn");

function fetchData() {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data);
}

async function filterData() {
  const data = await fetchData();
  const {
    results: {
      0: {
        email,
        login: { username },
        name: { first, last },
        phone,
        gender,
        location: { city, country, postcode },
        dob: { date },
      },
    },
  } = data;
  return {
    email,
    username,
    first,
    last,
    phone,
    gender,
    city,
    country,
    date,
    postcode,
  };
}
async function updateForm() {
  const data = await filterData();
  loginInp.value = data.username;
  password.value = data.username;
  passwordValidation.value = data.username;
  firstNameInp.value = data.first;
  countryInp.value = data.country;
  birthdayInp.value = data.date.slice(0, data.date.indexOf("T"));
  phoneInp.value = data.phone;
  emailInp.value = data.email;
  cityInp.value = data.city;
  cityCodeInp.value = data.postcode;
  lastNameInp.value = data.last;
}

generateUserBtn.addEventListener("click", updateForm);
