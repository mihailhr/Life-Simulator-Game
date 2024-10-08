import {
  adoptChoice,
  childrenChoice,
  getGrownAdultChoice,
  getRandomChildhoodChoice,
  getRandomGoldenAgeChoice,
  getRandomMatureAdultChoice,
  getRandomTeenChoice,
  getRandomYoungAdultChoice,
  marriageChoice,
} from "./choices.js";
import preloadImages from "./imagePreloader.js";

import setRandomBackground from "./imageRandomiser.js";
import * as pages from "./pages.js";
import * as stats from "./stats.js";

const root = document.getElementById("content");
let choiceRoot;

function renderWelcomePage() {
  root.innerHTML = pages.welcomePage;
  blurPage()
  preloadImages()
  const startButton = document.getElementsByTagName("button")[0];
  startButton.addEventListener("click", renderChooseNamePage);
}

function renderChooseNamePage() {
  root.innerHTML = pages.chooseNamePage;
  
  const heavenSound = new Audio("./Audio/angelical-pad-143276.mp3");
  heavenSound.play();
  const continueButton = document.getElementById("continue");
  const nameInputField = document.getElementsByTagName("input")[0];
  continueButton.addEventListener("click", () => {
    if (nameInputField.value.length < 3 || nameInputField.value.length > 10) {
      nameInputField.value = "";
      nameInputField.placeholder = "Name between 3 and 10 characters long.";
    } else {
      stats.changeUsername(nameInputField.value);
      renderChooseGenderPage();
    }
  });
}

function renderChooseGenderPage() {
  blurPage()
  root.innerHTML = pages.genderSelectPage;
  
  const maleAvatar = document.getElementById("manOption");
  const femaleAvatar = document.getElementById("womanOption");
  const continueButton = document.getElementsByTagName("button")[0];
  maleAvatar.addEventListener("click", () => {
    stats.setGender("man");
    maleAvatar.classList.add("selected");
    femaleAvatar.classList.remove("selected");
  });
  femaleAvatar.addEventListener("click", () => {
    stats.setGender("woman");
    femaleAvatar.classList.add("selected");
    maleAvatar.classList.remove("selected");
  });
  continueButton.addEventListener("click", () => {
    if (stats.gender) {
      renderNationalityPage();
    } else {
      window.alert("Please choose a gender for your character");
    }
  });
}

function renderNationalityPage() {
  stats.getNationality();
  root.innerHTML = pages.nationalityPage;
  
  document.getElementById("nationality").textContent = stats.nationality;
  setTimeout(() => {
    renderFamilyPage();
  }, 7000);
}

function renderFamilyPage() {
  stats.getFamilyMembers();
  if (stats.familyMembers.includes("orphan")) {
    root.innerHTML = `<h1 id="familyDiv">Your parents abandoned you when you were a baby. Unfortunately you don't remember them.</h1>`;
  } else if (stats.familyMembers.length === 1) {
    root.innerHTML = `<h1 id="familyDiv">Your family consists of you and your <span id="familyMember"></span>.</h1>`;
    document.getElementById("familyMember").textContent =
      stats.familyMembers[0];
  } else if (stats.familyMembers.length === 2) {
    root.innerHTML = `<h1 id="familyDiv">Your family consists of you, your <span id="member1"></span> and your <span id="member2"></span>.</h1>`;
    document.getElementById("member1").textContent = stats.familyMembers[0];
    document.getElementById("member2").textContent = stats.familyMembers[1];
  } else if (stats.familyMembers.length === 3) {
    root.innerHTML = `<h1 id="familyDiv">Your family consists of you, your <span id="member1"></span>, your <span id="member2"></span> and your <span id="member3"></span>.</h1>`;
    document.getElementById("member1").textContent = stats.familyMembers[0];
    document.getElementById("member2").textContent = stats.familyMembers[1];
    document.getElementById("member3").textContent = stats.familyMembers[2];
  } else {
    root.innerHTML = `<h1 id="familyDiv">Your family consists of you, your <span id="member1"></span>, your <span id="member2"></span>, your <span id="member3"></span> and your <span id="member4"></span>.</h1>`;
    document.getElementById("member1").textContent = stats.familyMembers[0];
    document.getElementById("member2").textContent = stats.familyMembers[1];
    document.getElementById("member3").textContent = stats.familyMembers[2];
    document.getElementById("member4").textContent = stats.familyMembers[3];
  }

  setTimeout(() => {
    root.innerHTML = pages.choiceTemplate;
    blurPage()
    choiceRoot = document.getElementById("currentChoice");
    stats.updateStats();
    document.getElementById("refresh").addEventListener("click", () => {
      if (stats.statsChecker()) {
        window.location.reload();
      } else {
        if (
          window.confirm(
            "Do you really want to to have a new life? All your memories will be erased!"
          )
        ) {
          window.location.reload();
        }
      }
    });
    renderNextChoice();
  }, 6000);
}

function renderNextChoice() {
  const message = stats.statsChecker();
  const hideStatsButton = document.getElementById("hideStats");
  hideStatsButton.style.display = "none";

  if (message) {
    blurPage()
    renderGameOverPage(message);
    return;
  }
  
  if (stats.age >= 6 && stats.age < 13) {
    renderChildhoodChoice();
  } else if (stats.age === 13) {
    renderTeenPage();
  } else if (stats.age > 13 && stats.age < 20) {
    renderTeenChoice();
  } else if (stats.age === 20) {
    renderAdultPage();
  } else if (stats.age === 21) {
    renderUniversityContinuationPage();
  } else if (stats.age > 21 && stats.age < 28) {
    renderYoungAdultChoice();
  } else if (stats.age === 28) {
    renderMarriageChoice();
  } else if (stats.age === 29) {
    renderMarriageContinuation();
  } else if (stats.age < 35) {
    renderGrownAdultChoice();
  } else if (stats.age === 35) {
    renderChildChoice();
  } else if (stats.age === 36) {
    renderChildChoiceContinuation();
  } else if (stats.age < 47) {
    renderMatureAdultChoice();
  } else if (stats.age === 47) {
    renderInheritancePage();
  } else if (stats.age < 53) {
    renderMoreMatureAdultChoices();
  } else if (stats.age === 53) {
    renderKidBirthdayPage();
  } else if (stats.age < 70) {
    renderGoldenAgeChoice();
  } else {
    renderGameEnd();
  }
}

if (stats.age === 6) {
  renderWelcomePage();
}

window.handleChoice = function handleChoice(choice) {
  let changesArray;
  const clickAudio = new Audio(
    "/Life-Simulator-Game/Audio/mouse-click-153941.mp3"
  );
  clickAudio.play();
  if (choice.includes(",")) {
    changesArray = choice.split(",");
  } else {
    changesArray = [choice];
  }
  stats.changeStats(changesArray);
  stats.updateStats();
  renderNextChoice();
};
window.hideButton = function hideButton(buttonClicked) {
  const hideStatsButton = document.getElementById("hideStats");
  const showStatsButton = document.getElementById("showStats");

  if (buttonClicked === "Yes") {
    showStatsButton.style.display = "none";
    hideStatsButton.style.display = "block";
    document.getElementById("currentChoice").style.display = "none";
    document.getElementById("stats").style.display = "flex";
    document.getElementById(
      "statsField"
    ).style.backgroundImage = `url("/Life-Simulator-Game/Images/statsBackground.jpg")`;
  } else {
    hideStatsButton.style.display = "none";
    showStatsButton.style.display = "block";
    document.getElementById("currentChoice").style.display = "flex";
    document.getElementById("stats").style.display = "none";
  }
};

function renderGameOverPage(message) {
  
  choiceRoot.innerHTML = pages.deadPage;
  document.getElementById("message").textContent = message;
  const deathSound = new Audio("./Audio/273567-Game-Over-Robot-Hit-8.mp3");
  deathSound.play();
}
function renderChildhoodChoice() {
  const choice = getRandomChildhoodChoice();
  choiceRoot.innerHTML = choice;
  choiceRoot.style.backgroundImage = `url("/Life-Simulator-Game/Images/kid room.jpg")`;
  choiceRoot.style.backgroundPosition = "center";
}

function renderTeenPage() {
  choiceRoot.innerHTML = pages.teenPage;
  document.getElementById("name").textContent = stats.username;
  document.getElementById("gender").textContent = stats.gender;
  document.getElementById("quality").textContent = stats.outstandingQuality;
  const hideStatsButton = document.getElementById("hideStats");
  const showStatsButton = document.getElementById("showStats");
  setTimeout(() => {
    stats.getOlder(1);

    showStatsButton.style.display = "block";
    document.getElementById("currentChoice").style.display = "flex";
    document.getElementById("stats").style.display = "none";
    renderNextChoice();
  }, 10000);
}

function renderTeenChoice() {
  const choice = getRandomTeenChoice(stats.gender);
  let backgroundImage;
  if (stats.gender === "man") {
    backgroundImage = "/Life-Simulator-Game/Images/boysRoom.gif";
  } else {
    backgroundImage = "/Life-Simulator-Game/Images/girls room.gif";
  }
  choiceRoot.innerHTML = choice;
  choiceRoot.style.backgroundImage = `url("${backgroundImage}")`;
}

function renderAdultPage() {
  choiceRoot.innerHTML = pages.adultPage;
  document.getElementById("name").textContent = stats.username;
  document.getElementById("gender").textContent = stats.gender;
  document.getElementById("quality").textContent = stats.outstandingQuality;
  setTimeout(() => {
    choiceRoot.innerHTML = pages.movingOutPage;
  }, 8000);
  setTimeout(() => {
    if (stats.intelligence < 70) {
      choiceRoot.innerHTML = pages.cantApplyToUniversityPage;
    } else {
      choiceRoot.innerHTML = pages.applyToUniversityPage;
    }
  }, 13000);
}

function renderUniversityContinuationPage() {
  if (stats.graduate === true) {
    stats.getOlder(4);
    choiceRoot.innerHTML = pages.finishedUniPage;
    stats.updateStats();
    setTimeout(() => {
      const choice = getRandomYoungAdultChoice();

      choiceRoot.innerHTML = choice;
    }, 7000);
  } else {
    stats.getOlder(1);
    stats.updateStats();
    const choice = getRandomYoungAdultChoice();
    choiceRoot.innerHTML = choice;
  }
  setRandomBackground(choiceRoot);
}

function renderYoungAdultChoice() {
  setRandomBackground(choiceRoot);
  const choice = getRandomYoungAdultChoice();
  choiceRoot.innerHTML = choice;
}

function renderMarriageChoice() {

  if (stats.sociability >= 70) {
    blurPage()
    choiceRoot.innerHTML = pages.marryPage;
    choiceRoot.style.backgroundImage = `url("/Life-Simulator-Game/Images/marriageChoice.jpg")`;
  } else {
    choiceRoot.innerHTML = pages.cantMarryPage;
  }
}
function renderMarriageContinuation() {
  if (stats.married === true) {
    blurPage()
    choiceRoot.innerHTML = pages.marriedPage;
    const familyMembersSpan = document.getElementById("familyMembers");
    let message;
    if (stats.familyMembers.includes("orphan")) {
      message =
        "A few old friends from the orphanage attended the ceremony and celebrated with you.";
    } else if (stats.familyMembers.length === 1) {
      message = `Your ${stats.familyMembers[0]} attended the ceremony and congratulated you.`;
    } else if (stats.familyMembers.length === 2) {
      message = `Your ${stats.familyMembers[0]} and ${stats.familyMembers[1]} attended the ceremony and congratulated you.`;
    } else {
      message = "All your family members were happy to be there";
    }
    familyMembersSpan.textContent = message;
    choiceRoot.style.backgroundImage = `url("/Life-Simulator-Game/Images/peakpx (3).jpg")`;
  } else {
    const choice = getGrownAdultChoice();
    choiceRoot.innerHTML = choice;
    setRandomBackground(choiceRoot);
  }
}

function renderGrownAdultChoice() {
  const choice = getGrownAdultChoice();
  choiceRoot.innerHTML = choice;
  setRandomBackground(choiceRoot);
}

function renderChildChoice() {
  if (stats.sociability > 65) {
    choiceRoot.innerHTML = childrenChoice;
  } else {
    choiceRoot.innerHTML = adoptChoice;
  }
  setRandomBackground(choiceRoot);
}

function renderChildChoiceContinuation() {
  if (stats.child) {
    choiceRoot.innerHTML = `<div id="choice">
      <h1>You have a baby now.</h1>
      </div>
      `;
  } else {
    choiceRoot.innerHTML = `<div id="choice">
      <h1>You decided not to have a baby.</h1>
      </div>`;
  }
  setRandomBackground(choiceRoot);
  setTimeout(() => {
    const choice = getGrownAdultChoice();
    choiceRoot.innerHTML = choice;
    setRandomBackground(choiceRoot);
  }, 7000);
}

function renderMatureAdultChoice() {
  const choice = getRandomMatureAdultChoice();
  choiceRoot.innerHTML = choice;
  setRandomBackground(choiceRoot);
}

function renderInheritancePage() {
  choiceRoot.innerHTML = pages.inheritancePage;
  const familyMemberSpan = document.getElementById("familyMember");
  if (stats.familyMembers.includes("orphan")) {
    familyMemberSpan.textContent = "old friend from the orphanage";
  } else {
    familyMemberSpan.textContent = stats.familyMembers[0];
  }
  document.getElementById("inheritanceNum").textContent =
    stats.getRandomInheritance();
  choiceRoot.style.backgroundImage = `url("/Life-Simulator-Game/Images/boys room.gif")`;
}

function renderMoreMatureAdultChoices() {
  const choice = getRandomMatureAdultChoice();
  choiceRoot.innerHTML = choice;
  setRandomBackground(choiceRoot);
}

function renderKidBirthdayPage() {
  if (stats.child) {
    choiceRoot.innerHTML = pages.kidBirthday;
  } else {
    const choice = getRandomMatureAdultChoice();
    choiceRoot.innerHTML = choice;
    setRandomBackground(choiceRoot);
  }
}

function renderGoldenAgeChoice() {
  const choice = getRandomGoldenAgeChoice();

  choiceRoot.innerHTML = choice;
  setRandomBackground(choiceRoot);
}

function renderGameEnd() {
  blurPage()
  choiceRoot.innerHTML = pages.gameEndPage;
  setTimeout(() => {
    stats.getOlder(15);
    stats.updateStats();
    choiceRoot.innerHTML = pages.rebirthPage;
    const heavenSound = new Audio("./Audio/angelical-pad-143276.mp3");
    heavenSound.play();
    stats.statsChecker();
    document.getElementById(
      "currentChoice"
    ).style.backgroundImage = `url("/Life-Simulator-Game/Images/cemetery.gif")`;
    document.getElementById("refresh").textContent = "Start anew";
    document.getElementById("refresh").style.color = "green";
  }, 9000);
}


function blurPage(){
  root.classList.add("blur")
  setTimeout(()=>{
    root.classList.remove("blur")
  },600)
}