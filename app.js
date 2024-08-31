const welcomePage = `
    <h1>Welcome to Life Simulator</h1>
`;

const chooseNamePage = `
    <h2>Choose your name:</h2>
    <form id="name-form">
        <input type="text" name="username" id="username" minlength="5" required>
        <button type="submit">Continue</button>
    </form>
`;

const genderSelectPage = `
    <h1>Hello, <span id="username"></span>. You are a 6 years old</h1>
    <form id="gender-form">
        <select id="genderSelect" required>
            <option value="man">Boy</option>
            <option value="woman">Girl</option>
        </select>
        <button type="submit">Continue</button>
    </form>
`;
const nationalityPage = `
<h1>You were born in <span id="nationality"></span>.</h1>
`;

const root = document.getElementById("content");
let username;
let gender;
let health=100
let intelligence=40
let athleticism=40
let sociability=50
let wealth=0
const allCountries = [
  // Africa
  "Nigeria",
  "South Africa",
  "Egypt",
  "Kenya",
  "Ghana",

  // Asia
  "China",
  "India",
  "Japan",
  "South Korea",
  "Thailand",

  // Europe
  "United Kingdom",
  "Germany",
  "France",
  "Italy",
  "Spain",

  // North America
  "United States",
  "Canada",
  "Mexico",

  // South America
  "Brazil",
  "Argentina",
  "Colombia",
  "Chile",

  // Oceania
  "Australia",
  "New Zealand",
  "Fiji",
];
const countriesLength = allCountries.length;
let nationality;

root.innerHTML = welcomePage;
setTimeout(() => {
  root.innerHTML = chooseNamePage;
  const form = document.getElementsByTagName("form")[0];
  form.addEventListener("submit", chooseName);
}, 4000);
function chooseName(e) {
  e.preventDefault();
  const nameField = document.getElementById("username");
  username = nameField.value;
  renderChooseGenderPage();
}
function renderChooseGenderPage() {
  // e.preventDefault()
  root.innerHTML = genderSelectPage;
  const usernameField = document.getElementById("username");
  usernameField.textContent = username;
  const form = document.getElementsByTagName("form")[0];
  form.addEventListener("submit", chooseGender);
}

function chooseGender(e) {
  e.preventDefault();
  const selectedGenderField = document.getElementById("genderSelect");
  gender = selectedGenderField.value;
  console.log(gender);
  getRandomNationality();
}

function getRandomNationality() {
  const randomCountryIndex = Math.floor(Math.random() * countriesLength);
  nationality = allCountries[randomCountryIndex];
  root.innerHTML = nationalityPage;
  const nationalitySpan = document.getElementById("nationality");
  nationalitySpan.textContent = nationality;
}
