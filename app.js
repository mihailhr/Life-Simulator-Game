import * as pages from "./pages.js"

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
root.innerHTML =pages.welcomePage;
setTimeout(() => {
  root.innerHTML = pages.chooseNamePage;
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
  root.innerHTML = pages.genderSelectPage;
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
  root.innerHTML = pages.nationalityPage;
  const nationalitySpan = document.getElementById("nationality");
  nationalitySpan.textContent = nationality;
  setTimeout(() => {
    firstChildhoodChoice()  
  }, 3000);
  
}

function firstChildhoodChoice(){
root.innerHTML=pages.firstChildhoodChoicePage
}
