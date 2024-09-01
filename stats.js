let username;
let gender;
let health=100
let intelligence=40
let athleticism=40
let sociability=50
let wealth=0
let familyMembers


function changeUsername(newUsername){
    username=newUsername
}

function setGender(newGender){
    gender=newGender
    console.log(newGender)
}


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



function updateStats(){
    const healthField=document.getElementById("health")
const intelligenceField=document.getElementById("intelligence")
const athleticismField=document.getElementById("athleticism")
const sociabilityField=document.getElementById("sociability")
const wealthField=document.getElementById("wealth")
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
function getNationality(){
    const randomNum=Math.floor(Math.random()*countriesLength)
    nationality=allCountries[randomNum]
}

export{username,gender,health,intelligence,sociability,wealth,familyMembers,nationality,countriesLength,getFamilyMembers,updateStats,changeUsername,setGender,getNationality}