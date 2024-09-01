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
continueButton.addEventListener("click",renderFamilyPage)
}
function renderFamilyPage(){
  console.log("Family page")
}




