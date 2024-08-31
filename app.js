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
const firstChildhoodChoicePage=`<div class="classroom">
    <section>
        <h1>It is your first day at school!</h1>
        <h2>Your classmates invited you to play a multiplayer game together.</h2>
    </section>
</div>`

const root = document.getElementById("content");
let username;
let gender;
let health=100
let intelligence=40
let athleticism=40
let sociability=50
let wealth=0
let familyMembers
function getFamilyMembers(){
    const parentsRandomNum=Math.floor(Math.random()*10)
    
    if(parentsRandomNum<2){
        familyMembers=["orphan"]
    }else if(parentsRandomNum<5){
        familyMembers=["mother","father"]
    }else if(parentsRandomNum<6){
        familyMembers=["mother","father","brother"]
    }
    else if(parentsRandomNum<7){
        familyMembers=["mother","father","sister"]
    }else if(parentsRandomNum<8){
        familyMembers=["mother","father","sister","brother"]
    }else if(parentsRandomNum<9){
        familyMembers=["mother"]
    }else{
        familyMembers=["father"]
    }
    console.log(familyMembers)
}
getFamilyMembers()
const healthField=document.getElementById("health")
const intelligenceField=document.getElementById("intelligence")
const athleticismField=document.getElementById("athleticism")
const sociabilityField=document.getElementById("sociability")
const wealthField=document.getElementById("wealth")

function updateStats(){
    healthField.textContent=health
    intelligenceField.textContent=intelligence
    athleticismField.textContent=athleticism
    sociabilityField.textContent=sociability
    wealthField.textContent=wealth
}

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
updateStats()
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
  setTimeout(() => {
    firstChildhoodChoice()  
  }, 3000);
  
}

function firstChildhoodChoice(){
root.innerHTML=firstChildhoodChoicePage
}
