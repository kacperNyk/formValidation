const API_URL = "https://randomuser.me/api/";
export const loginInp = document.getElementById("login");
export const firstNameInp = document.getElementById("firstName");
export const lastNameInp = document.getElementById("secondName");
export const birthdayInp = document.getElementById("birthday");
export const emailInp = document.getElementById("email");
export const phoneInp = document.getElementById("phone");
export const countryInp = document.getElementById("country");
export const cityInp = document.getElementById("city");
export const cityCodeInp = document.getElementById("cityCode");
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
  return (
    email, username, first, last, phone, gender, city, country, date, postcode
  );
}
async function updateForm() {
  const email = await filterData();
  console.log(email);
}
updateForm();
