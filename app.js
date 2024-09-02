import * as pages from "./pages.js"
import * as stats from "./stats.js"



const root = document.getElementById("content");
root.innerHTML =pages.welcomePage;
const startButton=document.getElementsByTagName("button")[0]
console.log(startButton)
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

  }else{
    root.innerHTML=`<h1 id="familyDiv">Your family consists of you, your <span id="member1"></span>, your <span id="member2"></span> and your <span id="member3"></span>.</h1>`
    document.getElementById("member1").textContent=stats.familyMembers[0]
    document.getElementById("member2").textContent=stats.familyMembers[1]
    document.getElementById("member3").textContent=stats.familyMembers[2]
    
  }
  setTimeout(()=>{
    renderFirstChoice()
  },5000)
}

// function handleChoice(choice){
//   console.log(choice)
// }



window.handleChoice=function handleChoice(choice){
  
  let changesArray
  if(choice.includes(",")){
    
     changesArray=choice.split(",")
  }else{
    changesArray=[choice]
  }
  stats.changeStats(changesArray)
  renderNextChoice()
 
}


let choiceRoot
function renderFirstChoice(){
  console.log("first choice")
  console.log(window.handleChoice)
  root.innerHTML=pages.choiceTemplate
  choiceRoot=document.getElementById("currentChoice")
  stats.updateStats()
  choiceRoot.innerHTML=`<h1>It is your first day in school. Your classmates invited you to play football after classes. Do you decide to have some fun with them or go home and read your favorite book instead?</h1>
<button onclick="handleChoice('+10 athleticism,+10 sociability')">Play football</button>
<button onclick="handleChoice('+10 intelligence,-10 sociability,-10 athleticism')">Read</button>
`
}


function renderNextChoice(){
  console.log(stats.age)
  choiceRoot.innerHTML="<h1>Next choice</h1>"
  if(stats.age<18){
    console.log("render child choice")
  }
}


