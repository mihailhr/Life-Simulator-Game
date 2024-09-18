

function displayGameOverPage(message) {
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
    choiceRoot.innerHTML = pages.marryPage;
    choiceRoot.style.backgroundImage = `url("/Life-Simulator-Game/Images/marriageChoice.jpg")`;
  } else {
    choiceRoot.innerHTML = pages.cantMarryPage;
  }
}
function renderMarriageContinuation() {
  if (stats.married === true) {
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

