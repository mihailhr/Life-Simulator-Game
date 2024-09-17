import { adoptChoice, childrenChoice, getGrownAdultChoice, getRandomChildhoodChoice, getRandomGoldenAgeChoice, getRandomMatureAdultChoice, getRandomTeenChoice, getRandomYoungAdultChoice, marriageChoice } from "./choices.js";
import setRandomBackground from "./imageRandomiser.js";
import * as pages from "./pages.js"
import * as stats from "./stats.js"


const root = document.getElementById("content");
let choiceRoot




function renderWelcomePage(){
  root.innerHTML=pages.welcomePage
  
  const startButton=document.getElementsByTagName("button")[0]
  startButton.addEventListener("click",renderChooseNamePage)
  
  
}

function renderChooseNamePage(){
  root.innerHTML=pages.chooseNamePage
  const heavenSound=new Audio("./Audio/angelical-pad-143276.mp3")
  heavenSound.play()
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
    document.getElementById("refresh").addEventListener("click",()=>{
      if(window.confirm("Do you really want to to have a new life? All your memories will be erased!")){
        window.location.reload()
      }
      
      })
    renderNextChoice()
  }, 5000);
}

function renderNextChoice(){
  
  const message=stats.statsChecker()
  const hideStatsButton=document.getElementById("hideStats")
  hideStatsButton.style.display="none"
 
  if(message ){
    choiceRoot.innerHTML=pages.deadPage
    document.getElementById("message").textContent=message
    const deathSound=new Audio("./Audio/273567-Game-Over-Robot-Hit-8.mp3")
    deathSound.play()
    return
  }


  if(stats.age>=6 && stats.age<13){
    const choice=getRandomChildhoodChoice()
    choiceRoot.innerHTML=choice
    choiceRoot.style.backgroundImage=`url("/Life-Simulator-Game/Images/kid room.jpg")`
    choiceRoot.style.backgroundPosition = 'center';
  }else if(stats.age===13){
    choiceRoot.innerHTML=pages.teenPage
    document.getElementById("name").textContent=stats.username
    document.getElementById("gender").textContent=stats.gender
    document.getElementById("quality").textContent=stats.outstandingQuality
    setTimeout(()=>{
      stats.getOlder(1)
      renderNextChoice()
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
      choiceRoot.style.backgroundImage=`url("/Life-Simulator-Game/Images/marriageChoice.jpg")`
    }else{
      choiceRoot.innerHTML=pages.cantMarryPage
    }
    
  }else if(stats.age===29){
    if(stats.married===true){
      choiceRoot.innerHTML=pages.marriedPage
      const familyMembersSpan=document.getElementById("familyMembers")
      let message
      if(stats.familyMembers.includes("orphan")){
        message="A few old friends from the orphanage attended the ceremony and celebrated with you."
      }else if(stats.familyMembers.length===1){
        message=`Your ${stats.familyMembers[0]} attended the ceremony and congratulated you.`
      }else if(stats.familyMembers.length===2){
        message=`Your ${stats.familyMembers[0]} and ${stats.familyMembers[1]} attended the ceremony and congratulated you.`
      }else{
        message="All your family members were happy to be there"
      }
      familyMembersSpan.textContent=message
      choiceRoot.style.backgroundImage=`url("/Life-Simulator-Game/Images/peakpx (3).jpg")`
    }else{

      const choice=getGrownAdultChoice()
      choiceRoot.innerHTML=choice
      setRandomBackground(choiceRoot)
    }
  }else if(stats.age<35){
    const choice=getGrownAdultChoice()
      choiceRoot.innerHTML=choice
      setRandomBackground(choiceRoot)

  }else if(stats.age===35) {
    if(stats.sociability>65){
      choiceRoot.innerHTML=childrenChoice
    }else{
      choiceRoot.innerHTML=adoptChoice
    }
    setRandomBackground(choiceRoot)
  }else if(stats.age===36){
    if(stats.child){
      choiceRoot.innerHTML=`<div id="choice">
      <h1>You have a baby now.</h1>
      </div>
      `
    }else{
       choiceRoot.innerHTML=`<div id="choice">
      <h1>You decided not to have a baby.</h1>
      </div>`
    }
    setRandomBackground(choiceRoot)
    setTimeout(()=>{
      const choice=getGrownAdultChoice()
       choiceRoot.innerHTML=choice
       setRandomBackground(choiceRoot)
    },4000)
  }else if(stats.age<47){
    const choice=getRandomMatureAdultChoice()
       choiceRoot.innerHTML=choice
       setRandomBackground(choiceRoot)
  }else if(stats.age===47){
    choiceRoot.innerHTML=pages.inheritancePage
    const familyMemberSpan=document.getElementById("familyMember")
        if(stats.familyMembers.includes("orphan")){
          familyMemberSpan.textContent="old friend from the orphanage"
        }else{
          familyMemberSpan.textContent=stats.familyMembers[0]
        }
    document.getElementById("inheritanceNum").textContent=stats.getRandomInheritance()
    choiceRoot.style.backgroundImage=`url("/Life-Simulator-Game/Images/boys room.gif")`

  }else if(stats.age<53){
    const choice=getRandomMatureAdultChoice()
       choiceRoot.innerHTML=choice
       setRandomBackground(choiceRoot)
  }else if(stats.age===53){
    if(stats.child){
      choiceRoot.innerHTML=pages.kidBirthday
    }else{
      const choice=getRandomMatureAdultChoice()
       choiceRoot.innerHTML=choice
       setRandomBackground(choiceRoot)
    }
  }else if(stats.age<70){
    const choice=getRandomGoldenAgeChoice()

    choiceRoot.innerHTML=choice
    setRandomBackground(choiceRoot)
  }else{
    choiceRoot.innerHTML=pages.gameEndPage
    setTimeout(()=>{
      stats.getOlder(15)
      stats.updateStats()
      choiceRoot.innerHTML=pages.rebirthPage
      const heavenSound=new Audio("./Audio/angelical-pad-143276.mp3")
      heavenSound.play()
      document.getElementById("currentChoice").style.backgroundImage=`url("/Life-Simulator-Game/Images/cemetery.gif")`
      document.getElementById("refresh").textContent="Start anew"
      document.getElementById("refresh").style.color="green"
    },7000)
  }
}


if(stats.age===6){
  renderWelcomePage()
}



window.handleChoice=function handleChoice(choice){
  let changesArray
  const clickAudio=new Audio("/Life-Simulator-Game/Audio/mouse-click-153941.mp3")
  clickAudio.play()
  if(choice.includes(",")){
    
     changesArray=choice.split(",")
  }else{
    changesArray=[choice]
  }
  stats.changeStats(changesArray)
  stats.updateStats()
  renderNextChoice()
  
}
window.hideButton=function hideButton(buttonClicked){
  console.log(buttonClicked)
  const hideStatsButton=document.getElementById("hideStats")
  const showStatsButton=document.getElementById("showStats")
   
  if(buttonClicked==="Yes"){
    showStatsButton.style.display="none"
    hideStatsButton.style.display="block"
    document.getElementById("currentChoice").style.display="none"
    document.getElementById("stats").style.display="flex"
    document.getElementById("statsField").style.backgroundImage=`url("/Life-Simulator-Game/Images/statsBackground.jpg")`
  }else{
    hideStatsButton.style.display="none"
    showStatsButton.style.display="block"
    document.getElementById("currentChoice").style.display="flex"
    document.getElementById("stats").style.display="none"
  }
}





