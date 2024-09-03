import { getRandomChildhoodChoice, getRandomTeenChoice } from "./choices.js";
import * as pages from "./pages.js"
import * as stats from "./stats.js"



const root = document.getElementById("content");
root.innerHTML =pages.welcomePage;
const startButton=document.getElementsByTagName("button")[0]

startButton.addEventListener("click",renderChooseNamePage)

function renderChooseNamePage(){
  root.innerHTML=pages.chooseNamePage
  const buttonNameChosen=document.getElementsByTagName("button")[0]
  buttonNameChosen.addEventListener("click",setUsername)
  if(stats.username){
    console.log("ok")
  }
}

function setUsername(e){
  e.preventDefault()
  const usernameInputField=document.getElementsByTagName("input")[0]
  if(usernameInputField.value.length>3 && usernameInputField.value!=="Your username must be at least 4 characters long"){
      stats.changeUsername(usernameInputField.value)
      renderGenderSelectPage()
  }else{
      usernameInputField.value="Your username must be at least 4 characters long"
  }
  
  
  
}



function renderGenderSelectPage(){
  console.log(stats.username)
  root.innerHTML=pages.genderSelectPage
  const manField=document.getElementById("manOption")
  const womanField=document.getElementById("womanOption")
 
  manField.addEventListener("click",()=>selectGender("man"))
  womanField.addEventListener("click",()=>selectGender("woman"))
  
  
}

function selectGender(gender){
  const manField=document.getElementById("manOption")
  const womanField=document.getElementById("womanOption")
  const continueButton=document.getElementsByTagName("button")[0]
stats.setGender(gender)
if(gender==="man"){
  manField.classList.add("selected")
  womanField.classList.remove("selected")
}else{
  manField.classList.remove("selected")
  womanField.classList.add("selected")
}
continueButton.addEventListener("click",renderNationalityPage)
}
function renderNationalityPage(){
  stats.getNationality()
  root.innerHTML=pages.nationalityPage
  const nationalitySpan=document.getElementById("nationality")
  nationalitySpan.textContent=stats.nationality
  stats.getFamilyMembers()
  setTimeout(() => {
    renderFamilyPage()
  }, 4000);
}

function renderFamilyPage(){
  console.log(stats.familyMembers)
  
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
  setTimeout(()=>{
    renderFirstChoice()
  },5000)
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
  if(stats.age<13){
    renderNextChoiceChildhood()
  }else if(stats.age<20){
    renderTeenChoices()
  }
 
  
}


let choiceRoot
function renderFirstChoice(){
  
  root.innerHTML=pages.choiceTemplate
  stats.updateStats()
  document.getElementById("refresh").addEventListener("click",()=>window.location.reload())
  choiceRoot=document.getElementById("currentChoice")
  choiceRoot.style.backgroundImage=`url("/Life-Simulator-Game/Images/town.gif")`
  choiceRoot.innerHTML=`
  
    <div id="choice">
    <h1>It is your first day in school. Your classmates invited you to play tag in the local park after classes. Do you decide to have some fun with them or go home and read your favorite book instead?</h1>
    <button onclick="handleChoice('+10 athleticism,+10 sociability')">Play tag together</button>
    <button onclick="handleChoice('+10 intelligence,-10 sociability,-10 athleticism')">Read</button>
    </div>

`
}


function renderNextChoiceChildhood(){
  while(stats.age<=12){
    const template=getRandomChildhoodChoice()
    
    
    choiceRoot.innerHTML=template
    choiceRoot.style.backgroundImage=`url("/Life-Simulator-Game/Images/town.gif")`
    if(stats.dead===true){
      choiceRoot.innerHTML=pages.deadPage
      break
    }
    if(stats.age===12){
      choiceRoot.innerHTML=pages.teenPage
      
      document.getElementById("name").textContent=stats.username
      document.getElementById("gender").textContent=stats.gender
      document.getElementById("quality").textContent=stats.outstandingQuality
      choiceRoot.style.backgroundImage=`url("/Life-Simulator-Game/Videos/townNamePage.gif")`
      setTimeout(()=>{
        renderTeenChoices()
      },6000)
    }
    break
  }
}

function renderTeenChoices(){

  while(stats.age<=19){
    const teenChoice=getRandomTeenChoice(stats.gender)
    choiceRoot.innerHTML=teenChoice
    if(stats.dead===true){
      choiceRoot.innerHTML=pages.deadPage
      break
    }
    if(stats.age===19){
      choiceRoot.innerHTML=pages.adultPage
      document.getElementById("name").textContent=stats.username
      document.getElementById("gender").textContent=stats.gender
      document.getElementById("quality").textContent=stats.outstandingQuality
    }
    break
  }
}




