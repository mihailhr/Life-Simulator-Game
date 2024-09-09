import { adoptChoice, childrenChoice, getGrownAdultChoice, getRandomChildhoodChoice, getRandomTeenChoice, getRandomYoungAdultChoice, marriageChoice } from "./choices.js";
import setRandomBackground from "./imageRandomiser.js";
import * as pages from "./pages.js"
import * as stats from "./stats.js"

function printAge(){
  console.log(stats.age)
}

const root = document.getElementById("content");
let choiceRoot




function renderWelcomePage(){
  root.innerHTML=pages.welcomePage
  const startButton=document.getElementsByTagName("button")[0]
  startButton.addEventListener("click",renderChooseNamePage)
}

function renderChooseNamePage(){
  root.innerHTML=pages.chooseNamePage
  const continueButton=document.getElementById("continue")
  const nameInputField=document.getElementsByTagName("input")[0]
  continueButton.addEventListener("click",()=>{
    if(nameInputField.value.length<3 || nameInputField.value.length>10){
      nameInputField.value=""
      nameInputField.placeholder="Your username should be between 3 and 10 characters long."

    }else{
      stats.changeUsername(nameInputField.value)
      renderChooseGenderPage()
    }
  })
}

function renderChooseGenderPage(){
  root.innerHTML=pages.genderSelectPage
  const maleAvatar=document.getElementById("manOption")
  const femaleAvatar=document.getElementById("womanOption")
  const continueButton=document.getElementsByTagName("button")[0]
  maleAvatar.addEventListener("click",()=>{
    stats.setGender("man");
    maleAvatar.classList.add("selected")
    femaleAvatar.classList.remove("selected")
  })
  femaleAvatar.addEventListener("click",()=>{
    stats.setGender("woman");
    femaleAvatar.classList.add("selected")
    maleAvatar.classList.remove("selected")
  })
  continueButton.addEventListener("click",()=>{
    if(stats.gender){
      renderNationalityPage()
    }else{
      window.alert("Please choose a gender for your character")
    }
  })

  

}


function renderNationalityPage(){
  stats.getNationality()
  root.innerHTML=pages.nationalityPage
  document.getElementById("nationality").textContent=stats.nationality
  setTimeout(()=>{
    renderFamilyPage()
  },5000)
 
}


function renderFamilyPage(){
  stats.getFamilyMembers()
  if (stats.familyMembers.includes("orphan")) {
    root.innerHTML=`<h1 id="familyDiv">Your parents abandoned you when you were a baby. Unfortunately you don't remember them.</h1>`
  }else if(stats.familyMembers.length===1){
    root.innerHTML=`<h1 id="familyDiv">Your family consists of you and your <span id="familyMember"></span>.</h1>`
    document.getElementById("familyMember").textContent=stats.familyMembers[0]
  }else if(stats.familyMembers.length===2){
    root.innerHTML=`<h1 id="familyDiv">Your family consists of you, your <span id="member1"></span> and your <span id="member2"></span>.</h1>`
    document.getElementById("member1").textContent=stats.familyMembers[0]
    document.getElementById("member2").textContent=stats.familyMembers[1]

  }else if(stats.familyMembers.length===3){
    root.innerHTML=`<h1 id="familyDiv">Your family consists of you, your <span id="member1"></span>, your <span id="member2"></span> and your <span id="member3"></span>.</h1>`
    document.getElementById("member1").textContent=stats.familyMembers[0]
    document.getElementById("member2").textContent=stats.familyMembers[1]
    document.getElementById("member3").textContent=stats.familyMembers[2]
  }else{
    
    root.innerHTML=`<h1 id="familyDiv">Your family consists of you, your <span id="member1"></span>, your <span id="member2"></span>, your <span id="member3"></span> and your <span id="member4"></span>.</h1>`
    document.getElementById("member1").textContent=stats.familyMembers[0]
    document.getElementById("member2").textContent=stats.familyMembers[1]
    document.getElementById("member3").textContent=stats.familyMembers[2]
    document.getElementById("member4").textContent=stats.familyMembers[3]
  }

  setTimeout(() => {
    root.innerHTML=pages.choiceTemplate
    choiceRoot=document.getElementById("currentChoice")
    stats.updateStats()
    document.getElementById("refresh").addEventListener("click",()=>window.location.reload())
    renderNextChoice()
  }, 5000);
}

function renderNextChoice(){
  if(stats.dead){
    choiceRoot.innerHTML=pages.deadPage
    return
  }


  if(stats.age>=6 && stats.age<13){
    const choice=getRandomChildhoodChoice()
    choiceRoot.innerHTML=choice
    root.style.backgroundImage=`url("/Life-Simulator-Game/Images/kid room.jpg")`
  }else if(stats.age===13){
    choiceRoot.innerHTML=pages.teenPage
    document.getElementById("name").textContent=stats.username
    document.getElementById("gender").textContent=stats.gender
    document.getElementById("quality").textContent=stats.outstandingQuality
    setTimeout(()=>{
      handleChoice("+nothing")
    },6000)
  }else if(stats.age>13 && stats.age<20){
    const choice=getRandomTeenChoice(stats.gender)
    let backgroundImage
    if(stats.gender==="man"){
      backgroundImage="/Life-Simulator-Game/Images/boysRoom.gif"
    }else{
      backgroundImage="/Life-Simulator-Game/Images/girls room.gif"
    }
    choiceRoot.innerHTML=choice
    choiceRoot.style.backgroundImage=`url("${backgroundImage}")`
    
  }else if(stats.age===20){
    choiceRoot.innerHTML=pages.adultPage
    document.getElementById("name").textContent=stats.username
    document.getElementById("gender").textContent=stats.gender
    document.getElementById("quality").textContent=stats.outstandingQuality
    setTimeout(()=>{
      choiceRoot.innerHTML=pages.movingOutPage
    },5000)
    setTimeout(()=>{
     if(stats.intelligence<70){
      choiceRoot.innerHTML=pages.cantApplyToUniversityPage
     }else{
      choiceRoot.innerHTML=pages.applyToUniversityPage
     } 
    },10000)
  }else if(stats.age===21){
    if(stats.graduate===true){
      stats.getOlder(4)
      choiceRoot.innerHTML=pages.finishedUniPage
      stats.updateStats()
      setTimeout(()=>{
        const choice=getRandomYoungAdultChoice();
        
      choiceRoot.innerHTML=choice
      },5000)
    }else{
      stats.getOlder(1)
      stats.updateStats()
      const choice=getRandomYoungAdultChoice()
      choiceRoot.innerHTML=choice
    }
    setRandomBackground(choiceRoot)
  }else if(stats.age>21 && stats.age<28){
    setRandomBackground(choiceRoot)
    const choice=getRandomYoungAdultChoice()
      choiceRoot.innerHTML=choice
  }else if(stats.age===28){
    if(stats.sociability>=70){
      choiceRoot.innerHTML=pages.marryPage
    }else{
      choiceRoot.innerHTML=pages.cantMarryPage
    }
    
  }else{
    choiceRoot.innerHTML=`<h1>To be continued</h1>`
  }
}


if(stats.age===6){
  renderWelcomePage()
}



window.handleChoice=function handleChoice(choice){
  let changesArray
  if(choice.includes(",")){
    
     changesArray=choice.split(",")
  }else{
    changesArray=[choice]
  }
  stats.changeStats(changesArray)
  stats.updateStats()
  renderNextChoice()
}





