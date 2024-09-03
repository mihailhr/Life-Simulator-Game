let username;
let gender;
let health=100
let intelligence=40
let athleticism=40
let sociability=50
let wealth=50
let familyMembers
let age=6
let dead=false
let outstandingQuality

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
        wealth-=30
    }else if(parentsRandomNum<5){
        familyMembers=["mother","father"]
        sociability-=10
    }else if(parentsRandomNum<6){
        familyMembers=["mother","father","brother"]
        athleticism+=10
    }
    else if(parentsRandomNum<7){
        familyMembers=["mother","father","sister"]
        sociability+=10
    }else if(parentsRandomNum<8){
        familyMembers=["mother","father","sister","brother"]
        wealth-=10
        sociability+=20
    }else if(parentsRandomNum<9){
        familyMembers=["mother"]
        athleticism-=20
        wealth-=20
        
    }else{
        familyMembers=["father"]
        wealth-=20
        athleticism+=20
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
    if(health<1){
        dead=true
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
      age++
      
      updateStats()
      outstandingQuality=[{name:"wealth",value:wealth},{name:"intelligence",value:intelligence},{name:"athleticism",value:athleticism},{name:"sociability",value:sociability}].sort((a,b)=>b.value-a.value)[0].name
      console.log(outstandingQuality)
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

function statsChecker(){
    let message
    if(intelligence<1){
        message=`<h1>Due to your lack of intelligence you took up gambling, alcohol and drugs. In the end you turned insane. <br/> Game over</h1>`
    }else if(athleticism<1){
        message=`<h1>You were in a hurry and decided to cross a busy street, ignoring your non-existing athleticism. You weren't quick enough and got hit by a oncoming truck. <br/> Game over </h1>`
    }else if(wealth<1){
        
        message=`<h1>You never learned how to save money and got involved with some shady people and debts that you could never pay. <br/> Game over</h1>`
    }else if(sociability<0){
        message=`<h1>Your weak social skills turned you into a bitter and depressed person who decided to escape society by living in the woods. Your current location is unknown. <br/> Game over</h1>`
    }
    return message
}

const countriesLength = allCountries.length;
let nationality;
function getNationality(){
    const randomNum=Math.floor(Math.random()*countriesLength)
    nationality=allCountries[randomNum]
}

export{age,username,gender,dead,health,athleticism,outstandingQuality,intelligence,sociability,wealth,familyMembers,nationality,countriesLength,changeStats,getFamilyMembers,updateStats,changeUsername,setGender,getNationality,statsChecker}