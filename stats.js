
let username;
let gender;
let health=100
let intelligence=40
let athleticism=40
let sociability=50
let wealth=50
let stress=10
let happiness=50
let familyMembers
let age=6
let dead=false
let graduate=false
let married=false
let child=false
let nationality
let outstandingQuality
function getOlder(yearsToAdd){
    age+=yearsToAdd
    }



function changeUsername(newUsername){
    username=newUsername
}

function setGender(newGender){
    gender=newGender
    
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
const stressField=document.getElementById("stress")
const happinessField=document.getElementById("happiness")
    if(health>100){
        health=100
    }
    if(happiness>100){
        happiness=100
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
        health=0
    }if(stress>100){
        stress=100
    }
    
    if(intelligence<0){
        intelligence=0
    }
    if(happiness<0){
        happiness=0
    }
    if(athleticism<0){
        athleticism=0
    }
    if(sociability<0){
        sociability=0
    }if(stress<0){
        stress=0
    }

    stressField.textContent=stress
    healthField.textContent=health
    intelligenceField.textContent=intelligence
    athleticismField.textContent=athleticism
    sociabilityField.textContent=sociability
    wealthField.textContent=wealth+"$"
    ageField.textContent=age
    happinessField.textContent=happiness


   

}

function changeStats(changesArray){
    
    for (let element of changesArray) {
        
        const sign=element[0]
        
        element=element.substring(1)
        
        const value=Number(element.split(" ")[0])
        
        element=element.split(" ")[1]
        
       
        if(sign==="+"){
          switch (element) {
            case "health": health+=value; break;
            case "wealth": wealth+=value; break;
            case "athleticism": athleticism+=value ;break;
            case "sociability": sociability+=value;break;
            case "intelligence": intelligence+=value;break;
            case "graduate": graduate=true;intelligence+=20;break;
            case "happiness": happiness+=value;break;
            case "stress":stress+=value;break;
            case "married":married=true;break;
            case "child":child=true;break;
            case "nothing": break;
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
            case "graduate": graduate=false;intelligence-=10;break;
            case "happiness": happiness-=value;break;
            case "stress":stress-=value;break;
            case "married":married=false;break;
            case "child":child=false;break;
            default:
              break;
          }
        }
      }
      age++
      if(age>19 && age <35){
        if(graduate===true){
            wealth+=3000
        }else{
            wealth+=1000
        }
      }else if(age<19){
        wealth+=100
      }else{
        if(graduate===true){
            wealth+=7000
        }else{
            wealth+=3000
        }
      }
      if(age>19 && age<45){
      if(graduate===true){
        stress+=3
      }else{
        stress+=2
      }
    }else if(age>44){
        if(graduate===true){
            stress+=2
          }else{
            stress+=1
    }}
      updateStats()
      outstandingQuality=[{name:"intelligence",value:intelligence},{name:"athleticism",value:athleticism},{name:"sociability",value:sociability}].sort((a,b)=>b.value-a.value)[0].name
      
      
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
        message=`Due to your lack of intelligence you took up gambling, alcohol and drugs. In the end you turned homeless and insane.`
    }else if(athleticism<1){
        message=`You were in a hurry and decided to cross a busy street, ignoring your non-existing athleticism. You weren't quick enough and got hit by a oncoming truck.`
    }else if(wealth<1){
        
        message=`You never learned how to save money and got involved with some shady people and debts that you could never pay.`
    }else if(sociability<1){
        message=`Your weak social skills turned you into a bitter and depressed person who decided to escape society by living in the woods. Your current location is unknown.`
    }else if(stress>99){
        message=`High levels of stress took a toll on you. You received an unexpected and fatal heart attack.`
    }else if(happiness<1){
        message=`Your low satisfaction of life forced you to move to Nepal and live as a monk. Your current location is unknown.`
    }else if(dead===true){
        message=`Throughout your life, you acted immortal. Unsurprisingly this wasn't the case.`
    }
    console.log(stress,wealth)
    return message
}

const countriesLength = allCountries.length;

function getNationality(){
    const randomNum=Math.floor(Math.random()*countriesLength)
    nationality=allCountries[randomNum]
}
function getRandomInheritance(){
    const inheritanceNum=Math.round(Math.random()*1000000)
    wealth+=inheritanceNum
    updateStats()
    return inheritanceNum
}

export{age,username,gender,dead,health,athleticism,getRandomInheritance,getOlder,outstandingQuality,intelligence,sociability,wealth,familyMembers,nationality,married,child,graduate,countriesLength,changeStats,getFamilyMembers,updateStats,changeUsername,setGender,getNationality,statsChecker}