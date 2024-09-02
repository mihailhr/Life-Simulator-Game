let username;
let gender;
let health=100
let intelligence=40
let athleticism=40
let sociability=50
let wealth=0
let familyMembers
let age=6


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
    const ageField=document.getElementById("age")
    const healthField=document.getElementById("health")
const intelligenceField=document.getElementById("intelligence")
const athleticismField=document.getElementById("athleticism")
const sociabilityField=document.getElementById("sociability")
const wealthField=document.getElementById("wealth")
    if(health>100){
        health=100
    }
    if(intelligence>100){
        intelligence=100
    }
    if(athleticism>100){
        athleticism=100
    }
    if(sociability>100){
        sociability=100
    }
    healthField.textContent=health
    intelligenceField.textContent=intelligence
    athleticismField.textContent=athleticism
    sociabilityField.textContent=sociability
    wealthField.textContent=wealth
    ageField.textContent=age
}

function changeStats(changesArray){
    console.log(changesArray)
    for (let element of changesArray) {
        
        const sign=element[0]
        console.log(sign)
        element=element.substring(1)
        console.log(element)
        const value=Number(element.split(" ")[0])
        console.log(element)
        element=element.split(" ")[1]
        console.log(element,value)
       
        if(sign==="+"){
          switch (element) {
            case "health": health+=value; break;
            case "wealth": wealth+=value; break;
            case "athleticism": athleticism+=value ;console.log("here");break;
            case "sociability": sociability+=value;break;
            case "intelligence": intelligence+=value;break;
          
            default:
              break;
          }
        }else{
          switch (element) {
            case "health": health-=value; break;
            case "wealth": wealth-=value; break;
            case "athleticism": athleticism-=value;break;
            case "sociability": sociability-=value;break;
            case "intelligence": intelligence-=value;break;
          
            default:
              break;
          }
        }
      }
      age+=2
      wealth+=50
      updateStats()
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
  "the United Kingdom",
  "Germany",
  "France",
  "Italy",
  "Spain",

  // North America
  "the United States",
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

export{age,username,gender,health,athleticism,intelligence,sociability,wealth,familyMembers,nationality,countriesLength,changeStats,getFamilyMembers,updateStats,changeUsername,setGender,getNationality}