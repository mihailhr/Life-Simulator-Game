const childhoodChoices = [
  `<div id="choice">
        <h1>You find a shiny rock in the park. Do you keep it as a treasure or give it to a friend?</h1>
        <button onclick="handleChoice('+5 happiness,+5 sociability')">Give it to a friend</button>
        <button onclick="handleChoice('+10 happiness')">Keep it as a treasure</button>
    </div>`,

  `<div id="choice">
        <h1>Your teacher gives you extra homework. Do you finish it right away or play with friends first?</h1>
        <button onclick="handleChoice('+10 intelligence,-5 happiness')">Finish it right away</button>
        <button onclick="handleChoice('+10 happiness,-5 intelligence')">Play with friends first</button>
    </div>`,

  `<div id="choice">
        <h1>You have some extra allowance money. Do you save it or buy a toy you really want?</h1>
        <button onclick="handleChoice('+10 wealth,-5 happiness')">Save it</button>
        <button onclick="handleChoice('-10 wealth,+15 happiness')">Buy the toy</button>
    </div>`,

  `<div id="choice">
        <h1>Your school is holding a sports day. Do you join the race or cheer for your friends?</h1>
        <button onclick="handleChoice('+15 athleticism,-5 happiness')">Join the race</button>
        <button onclick="handleChoice('+10 happiness')">Cheer for your friends</button>
    </div>`,

  `<div id="choice">
        <h1>You’re invited to a birthday party, but you have a big project due. Do you go to the party or finish your project?</h1>
        <button onclick="handleChoice('-10 intelligence,-10 happiness')">Go to the party</button>
        <button onclick="handleChoice('+20 intelligence,-5 happiness')">Finish your project</button>
    </div>`,

  `<div id="choice">
        <h1>You find a new puzzle game. Do you spend time solving it or play outside with friends?</h1>
        <button onclick="handleChoice('+15 intelligence,-5 happiness')">Solve the puzzle</button>
        <button onclick="handleChoice('+10 happiness,-5 intelligence')">Play outside with friends</button>
    </div>`,

  `<div id="choice">
        <h1>You have a chance to help with a school play. Do you join in or stay focused on your own hobbies?</h1>
        <button onclick="handleChoice('+10 sociability,-5 stress')">Join the school play</button>
        <button onclick="handleChoice('+10 happiness,-5 sociability')">Focus on your own hobbies</button>
    </div>`,

  `<div id="choice">
        <h1>You’re feeling tired after a busy day. Do you go to bed early or stay up to finish a game?</h1>
        <button onclick="handleChoice('-10 health,+10 happiness')">Go to bed early</button>
        <button onclick="handleChoice('+10 health,-10 happiness')">Stay up to finish the game</button>
    </div>`,

  `<div id="choice">
        <h1>Your friend invites you to a weekend camp. Do you go or stay home to play your favorite game?</h1>
        <button onclick="handleChoice('+15 sociability,-10 happiness')">Go to the camp</button>
        <button onclick="handleChoice('+10 happiness,-10 sociability')">Stay home to play</button>
    </div>`,

  `<div id="choice">
        <h1>You see a friend in need of help with homework. Do you assist them or finish your own homework first?</h1>
        <button onclick="handleChoice('+10 sociability,-5 intelligence')">Assist them</button>
        <button onclick="handleChoice('+10 intelligence,-5 sociability')">Finish your own homework</button>
    </div>`,

  `<div id="choice">
        <h1>You’re invited to a fun art class. Do you join the class or continue with your regular activities?</h1>
        <button onclick="handleChoice('+10 intelligence,-5 athleticism')">Join the art class</button>
        <button onclick="handleChoice('+10 athleticism,-5 intelligence')">Continue with regular activities</button>
    </div>`,

  `<div id="choice">
        <h1>You have the option to help clean the park or stay home and play a video game. What do you choose?</h1>
        <button onclick="handleChoice('+10 happiness,-5 wealth')">Help clean the park</button>
        <button onclick="handleChoice('+10 wealth,-5 happiness')">Play a video game</button>
    </div>`,

  `<div id="choice">
        <h1>You find a new friend at school. Do you invite them to your house or keep it casual at school?</h1>
        <button onclick="handleChoice('+10 sociability,-5 stress')">Invite them to your house</button>
        <button onclick="handleChoice('+5 happiness')">Keep it casual</button>
    </div>`,

  `<div id="choice">
        <h1>You can join a new club at school. Do you join it or stick with your current activities?</h1>
        <button onclick="handleChoice('+15 sociability,-5 happiness')">Join the new club</button>
        <button onclick="handleChoice('+10 happiness')">Stick with current activities</button>
    </div>`,

  `<div id="choice">
        <h1>Your class is having a talent show. Do you perform or watch your friends perform?</h1>
        <button onclick="handleChoice('+15 happiness,-10 stress')">Perform</button>
        <button onclick="handleChoice('+10 sociability')">Watch your friends</button>
    </div>`,

  `<div id="choice">
        <h1>You have a chance to learn a new craft. Do you take the opportunity or stick to what you know?</h1>
        <button onclick="handleChoice('+10 intelligence,-5 happiness')">Learn the new craft</button>
        <button onclick="handleChoice('+10 happiness,-5 intelligence')">Stick to what you know</button>
    </div>`,

  `<div id="choice">
        <h1>You decide to run in a race with no training. Do you participate or skip it?</h1>
        <button onclick="handleChoice('-30 health,+10 athleticism')">Participate</button>
        <button onclick="handleChoice('+10 happiness')">Skip it</button>
    </div>`,

  `<div id="choice">
        <h1>You eat a huge amount of candy before dinner. Do you indulge or choose a healthy meal?</h1>
        <button onclick="handleChoice('-20 health,+10 happiness')">Indulge in candy</button>
        <button onclick="handleChoice('+10 health,-5 happiness')">Choose a healthy meal</button>
    </div>`,

  `<div id="choice">
        <h1>You get into a minor argument with a friend. Do you resolve it immediately or avoid the situation?</h1>
        <button onclick="handleChoice('-15 health,+10 sociability')">Resolve it immediately</button>
        <button onclick="handleChoice('+5 happiness,-5 sociability')">Avoid the situation</button>
    </div>`,

  `<div id="choice">
        <h1>You stay up all night playing games. Do you keep playing or go to sleep?</h1>
        <button onclick="handleChoice('-40 health,+10 happiness')">Keep playing</button>
        <button onclick="handleChoice('+10 health,-10 happiness')">Go to sleep</button>
    </div>`,

  `<div id="choice">
        <h1>You decide to skip a few meals to save time. Do you skip meals or stick to your regular eating schedule?</h1>
        <button onclick="handleChoice('-20 health,-10 stress')">Skip meals</button>
        <button onclick="handleChoice('+10 health,+10 stress')">Stick to your regular eating schedule</button>
    </div>`,
  `<div id="choice">
        <h1>You decide to skateboard down a really steep hill without a helmet. Do you keep going or turn around?</h1>
        <button onclick="handleChoice('-100 health')">Keep going down the hill</button>
        <button onclick="handleChoice('+10 happiness')">Turn around and head back</button>
    </div>`,

  `<div id="choice">
        <h1>You find a box of matches and start playing with them. Do you keep using the matches or put them away?</h1>
        <button onclick="handleChoice('-100 health')">Keep using the matches</button>
        <button onclick="handleChoice('+10 happiness')">Put them away</button>
    </div>`,

  `<div id="choice">
        <h1>You’re playing with fireworks without any adult supervision. Do you keep playing or ask for help?</h1>
        <button onclick="handleChoice('-100 health')">Keep playing with fireworks</button>
        <button onclick="handleChoice('+10 happiness')">Ask for help</button>
    </div>`,
];

const teenGirlChoices = [
  `<div id="choice">
        <h1>Your friends are planning a sleepover this weekend. Do you join the fun or stay home to work on a big project?</h1>
        <button onclick="handleChoice('+10 sociability,+5 happiness,-5 stress')">Join the sleepover</button>
        <button onclick="handleChoice('+10 intelligence,-10 happiness')">Stay home and work on the project</button>
    </div>`,

  `<div id="choice">
        <h1>There’s a new makeup line you’ve been wanting to try, but it’s quite expensive. Do you buy it or save your money for something else?</h1>
        <button onclick="handleChoice('-20 wealth,+5 happiness')">Buy the makeup</button>
        <button onclick="handleChoice('+20 wealth,-5 happiness')">Save your money</button>
    </div>`,

  `<div id="choice">
        <h1>Your school is organizing a dance competition. Do you enter the competition or watch from the audience?</h1>
        <button onclick="handleChoice('+15 happiness,+10 sociability,+5 stress')">Enter the competition</button>
        <button onclick="handleChoice('+10 sociability,-10 happiness')">Watch from the audience</button>
    </div>`,

  `<div id="choice">
        <h1>You can either go on a weekend shopping spree with friends or spend the day volunteering at a local animal shelter. What’s your choice?</h1>
        <button onclick="handleChoice('-10 wealth,+15 happiness,+5 sociability')">Shopping spree with friends</button>
        <button onclick="handleChoice('+10 sociability,+10 happiness')">Volunteer at the shelter</button>
    </div>`,

  `<div id="choice">
        <h1>You’re invited to a weekend party, but you also have a big exam coming up. Do you go to the party or stay in and study?</h1>
        <button onclick="handleChoice('+10 sociability,-15 stress,-5 intelligence')">Go to the party</button>
        <button onclick="handleChoice('+20 intelligence,-10 sociability')">Stay in and study</button>
    </div>`,

  `<div id="choice">
        <h1>Your favorite author is coming to town for a book signing. Do you attend the event or use the time to work on your personal blog?</h1>
        <button onclick="handleChoice('+15 happiness,+5 sociability')">Attend the book signing</button>
        <button onclick="handleChoice('+10 intelligence')">Work on your personal blog</button>
    </div>`,

  `<div id="choice">
        <h1>You find a new fashion trend online that you want to try. Do you buy the clothes or stick with your current style?</h1>
        <button onclick="handleChoice('-150 wealth,+10 happiness')">Buy the new clothes</button>
        <button onclick="handleChoice('-5 happiness')">Stick with your current style</button>
    </div>`,

  `<div id="choice">
        <h1>Your friends are planning a group trip to a theme park. Do you go with them or stay home to focus on your hobbies?</h1>
        <button onclick="handleChoice('+20 sociability,-50 wealth')">Go to the theme park</button>
        <button onclick="handleChoice('+15 happiness')">Stay home and focus on hobbies</button>
    </div>`,

  `<div id="choice">
        <h1>There's a new workout class you’ve been wanting to try. Do you join the class or stick with your current exercise routine?</h1>
        <button onclick="handleChoice('+10 athleticism,+5 sociability')">Join the new workout class</button>
        <button onclick="handleChoice('+5 athleticism')">Stick with your current routine</button>
    </div>`,

  `<div id="choice">
        <h1>You’ve been invited to participate in a local art exhibition. Do you showcase your artwork or take some time off for relaxation?</h1>
        <button onclick="handleChoice('+10 happiness,+10 sociability')">Showcase your artwork</button>
        <button onclick="handleChoice('110 stress')">Take time off for relaxation</button>
    </div>`,
  `<div id="choice">
        <h1>You see a dangerous-looking shortcut through a construction site while rushing to meet your friends. Do you take the shortcut or stick to the main road?</h1>
        <button onclick="handleChoice('-100 health')">Take the shortcut</button>
        <button onclick="handleChoice('+10 sociability')">Stick to the main road</button>
    </div>`,

  `<div id="choice">
        <h1>You find a bottle of unknown pills at a party. Do you try one out of curiosity or leave them alone?</h1>
        <button onclick="handleChoice('-100 health')">Try the pills</button>
        <button onclick="handleChoice('+10 intelligence')">Leave them alone</button>
    </div>`,

  `<div id="choice">
        <h1>Your friends are daring you to swim in a river with a strong current. Do you accept the dare or play it safe on the riverbank?</h1>
        <button onclick="handleChoice('-100 health')">Swim in the river</button>
        <button onclick="handleChoice('+10 sociability')">Play it safe on the riverbank</button>
    </div>`,

  `<div id="choice">
        <h1>You come across a bike left unattended on the edge of a cliff. Do you ride it for fun or avoid it entirely?</h1>
        <button onclick="handleChoice('-40 health')">Ride the bike</button>
        <button onclick="handleChoice('+10 intelligence')">Avoid the bike</button>
    </div>`,

  `<div id="choice">
        <h1>You discover a new online challenge that’s gone viral, but it involves dangerous stunts. Do you participate or skip it?</h1>
        <button onclick="handleChoice('-50 health,+10 sociability')">Participate in the challenge</button>
        <button onclick="handleChoice('+10 happiness')">Skip the challenge</button>
    </div>`,
];
const teenBoyChoices = [
  `<div id="choice">
        <h1>Your friends are organizing a weekend sports tournament. Do you join the team or spend the time playing video games?</h1>
        <button onclick="handleChoice('+15 fitness,+10 sociability')">Join the sports tournament</button>
        <button onclick="handleChoice('+10 happiness')">Play video games</button>
    </div>`,

  `<div id="choice">
        <h1>A new gaming console has been released, but it’s quite pricey. Do you buy it or save your money for future needs?</h1>
        <button onclick="handleChoice('-300 wealth,+10 happiness')">Buy the console</button>
        <button onclick="handleChoice('-10 happiness')">Save your money</button>
    </div>`,

  `<div id="choice">
        <h1>Your school is holding a coding competition. Do you enter the competition or hang out with friends?</h1>
        <button onclick="handleChoice('+15 intelligence,+10 stress')">Enter the coding competition</button>
        <button onclick="handleChoice('+10 sociability')">Hang out with friends</button>
    </div>`,

  `<div id="choice">
        <h1>You’ve been invited to a weekend camping trip with friends. Do you go on the trip or stay home to work on a personal project?</h1>
        <button onclick="handleChoice('+20 sociability,-100 wealth,-10 stress')">Go camping</button>
        <button onclick="handleChoice('+15 intelligence,+5 stress')">Work on the personal project</button>
    </div>`,

  `<div id="choice">
        <h1>There’s a new superhero movie out, but you also have a big test coming up. Do you watch the movie or study for the test?</h1>
        <button onclick="handleChoice('+10 happiness,-15 stress')">Watch the movie</button>
        <button onclick="handleChoice('+20 intelligence,-10 sociability,+5 stress')">Study for the test</button>
    </div>`,

  `<div id="choice">
        <h1>Your favorite sports team is playing a big match. Do you go to the game or stay home to complete an important assignment?</h1>
        <button onclick="handleChoice('+5 sociability,+10 happiness,-5 stress')">Go to the game</button>
        <button onclick="handleChoice('+20 intelligence,+5 stress')">Complete the assignment</button>
    </div>`,

  `<div id="choice">
        <h1>You find a cool tech gadget online that you really want. Do you buy it now or save up for other things?</h1>
        <button onclick="handleChoice('-50 wealth,+10 happiness')">Buy the tech gadget</button>
        <button onclick="handleChoice('-5 happiness')">Save up for other things</button>
    </div>`,

  `<div id="choice">
        <h1>You’re invited to a local sports camp. Do you join the camp or spend the time working on your gaming skills?</h1>
        <button onclick="handleChoice('+20 athleticism,+10 sociability,+10 health')">Join the sports camp</button>
        <button onclick="handleChoice('-10 sociability,-5 health')">Work on your gaming skills</button>
    </div>`,

  `<div id="choice">
        <h1>Your school is hosting a talent show. Do you perform in the show or cheer for your friends from the audience?</h1>
        <button onclick="handleChoice('+10 happiness,+10 sociability,+5 stress')">Perform in the show</button>
        <button onclick="handleChoice('+10 sociability,-5 happiness')">Cheer for your friends</button>
    </div>`,

  `<div id="choice">
        <h1>There’s a new video game tournament coming up. Do you enter the tournament or relax at home?</h1>
        <button onclick="handleChoice('+15 happiness,+5 sociability,+5 stress')">Enter the tournament</button>
        <button onclick="handleChoice('-10 stress')">Relax at home</button>
    </div>`,
  `<div id="choice">
        <h1>You see a dangerous-looking shortcut through a construction site while rushing to meet your friends. Do you take the shortcut or stick to the main road?</h1>
        <button onclick="handleChoice('-40 health')">Take the shortcut</button>
        <button onclick="handleChoice('+10 intelligence')">Stick to the main road</button>
    </div>`,

  `<div id="choice">
        <h1>You find a bottle of unknown pills at a party. Do you try one out of curiosity or leave them alone?</h1>
        <button onclick="handleChoice('-100 health')">Try the pills</button>
        <button onclick="handleChoice('+10 intelligence')">Leave them alone</button>
    </div>`,

  `<div id="choice">
        <h1>Your friends are daring you to swim in a river with a strong current. Do you accept the dare or play it safe on the riverbank?</h1>
        <button onclick="handleChoice('-100 health')">Swim in the river</button>
        <button onclick="handleChoice('+10 intelligence')">Play it safe on the riverbank</button>
    </div>`,

  `<div id="choice">
        <h1>You come across a bike left unattended on the edge of a cliff. Do you ride it for fun or avoid it entirely?</h1>
        <button onclick="handleChoice('-60 health')">Ride the bike</button>
        <button onclick="handleChoice('+10 intelligence')">Avoid the bike</button>
    </div>`,

  `<div id="choice">
        <h1>You discover a new online challenge that’s gone viral, but it involves dangerous stunts. Do you participate or skip it?</h1>
        <button onclick="handleChoice('-50 health')">Participate in the challenge</button>
        <button onclick="handleChoice('+5 intelligence')">Skip the challenge</button>
    </div>`,
];
let youngAdultChoices = [
  `<div id="choice">
        <h1>Your boss offers you an overtime project with tight deadlines but a significant bonus. Do you accept the project or decline to maintain your work-life balance?</h1>
        <button onclick="handleChoice('-20 health,+2000 wealth,+10 stress')">Accept the project</button>
        <button onclick="handleChoice('+10 happiness')">Decline to maintain balance</button>
    </div>`,

  `<div id="choice">
        <h1>You have the opportunity to invest in a high-risk stock that could yield great returns or cost you dearly. Do you invest or play it safe?</h1>
        <button onclick="handleChoice('-20 wealth,+12000 wealth')">Invest in the stock</button>
        <button onclick="handleChoice('+10 happiness,+5 wealth')">Play it safe</button>
    </div>`,

  `<div id="choice">
        <h1>You’re offered a promotion that requires relocating to another city. Do you accept the promotion or stay in your current role?</h1>
        <button onclick="handleChoice('+5000 wealth,-20 happiness,+15 stress')">Accept the promotion</button>
        <button onclick="handleChoice('+10 happiness,')">Stay in current role</button>
    </div>`,

  `<div id="choice">
        <h1>You discover that a close friend has been spreading rumors about you. Do you confront them or let it go?</h1>
        <button onclick="handleChoice('+10 sociability,+10 stress')">Confront them</button>
        <button onclick="handleChoice('+10 happiness,-10 sociability')">Let it go</button>
    </div>`,

  `<div id="choice">
        <h1>You’re feeling burned out at work. Do you take a mental health day or push through?</h1>
        <button onclick="handleChoice('+10 health,-300 wealth,+10 happiness')">Take a mental health day</button>
        <button onclick="handleChoice('-10 health,+100 wealth')">Push through</button>
    </div>`,

  `<div id="choice">
        <h1>You find a wallet full of cash on the street. Do you keep it or turn it into the authorities?</h1>
        <button onclick="handleChoice('-10 sociability,+1237 wealth')">Keep the wallet</button>
        <button onclick="handleChoice('+10 sociability,+10 happiness')">Turn it in</button>
    </div>`,

  `<div id="choice">
        <h1>You’re invited to a networking event that could advance your career but you’re feeling socially drained. Do you attend or skip it?</h1>
        <button onclick="handleChoice('+20 sociability,+10 wealth,-10 happiness,+10 stress')">Attend the event</button>
        <button onclick="handleChoice('+10 happiness,-10 stress')">Skip it</button>
    </div>`,

  `<div id="choice">
        <h1>Your car breaks down, and you can either pay for expensive repairs or buy a new one on credit. What do you do?</h1>
        <button onclick="handleChoice('-6000 wealth,+10 happiness')">Pay for repairs</button>
        <button onclick="handleChoice('-15000 wealth,+20 happiness')">Buy a new car on credit</button>
    </div>`,

  `<div id="choice">
        <h1>You’re considering going back to school for a degree that could advance your career. Do you enroll or stick with your current job?</h1>
        <button onclick="handleChoice('+20 intelligence,+10000 wealth, +15 stress ')">Enroll in school</button>
        <button onclick="handleChoice('+10 happiness')">Stick with your current job</button>
    </div>`,

  `<div id="choice">
        <h1>You’re at a family gathering and a heated political discussion arises. Do you engage in the debate or stay silent?</h1>
        <button onclick="handleChoice('+10 intelligence,+10 stress,-10 sociability')">Engage in the debate</button>
        <button onclick="handleChoice('+10 happiness,+10 sociability')">Stay silent</button>
    </div>`,

  `<div id="choice">
        <h1>You’re offered a lucrative and well paid quick task in a morally questionable industry. Do you take the job or stay true to your principles?</h1>
        <button onclick="handleChoice('+1480 wealth,-30 happiness,+20 stress')">Take the job</button>
        <button onclick="handleChoice('+30 happiness,+10 sociability')">Stay true to your principles</button>
    </div>`,

  `<div id="choice">
        <h1>You have the opportunity to volunteer for a cause you care about, but it requires sacrificing your free time. Do you volunteer or focus on your personal life?</h1>
        <button onclick="handleChoice('+20 sociability,+10 happiness,+10 stress')">Volunteer</button>
        <button onclick="handleChoice('+10 happiness,-10 stress')">Focus on personal life</button>
    </div>`,

  `<div id="choice">
        <h1>You’re offered a free vacation but during your busiest time at work. Do you take the vacation or stay to handle your work responsibilities?</h1>
        <button onclick="handleChoice('+30 happiness,-1000 wealth,+5 stress')">Take the vacation</button>
        <button onclick="handleChoice('+1000 wealth,-10 happiness,-5 stress')">Stay and work</button>
    </div>`,

  `<div id="choice">
        <h1>Your friend asks you to co-sign a loan they might struggle to repay. Do you co-sign or politely decline?</h1>
        <button onclick="handleChoice('-14000 wealth,+10 sociability,+10 stress')">Co-sign the loan</button>
        <button onclick="handleChoice('+10 happiness,-10 sociability')">Politely decline</button>
    </div>`,

  `<div id="choice">
        <h1>You’re feeling unwell but have an important presentation. Do you power through or call in sick?</h1>
        <button onclick="handleChoice('-15 health,+800 wealth,+10 stress')">Power through</button>
        <button onclick="handleChoice('+20 health,-10 sociability')">Call in sick</button>
    </div>`,

  `<div id="choice">
        <h1>You’re driving late at night and start to feel extremely tired. Do you keep driving to get home faster or pull over and rest?</h1>
        <button onclick="handleChoice('-80 health')">Keep driving</button>
        <button onclick="handleChoice('-5 stress')">Pull over and rest</button>
    </div>`,

  `<div id="choice">
        <h1>You’re exploring a remote area and notice storm clouds approaching. Do you continue exploring or seek shelter immediately?</h1>
        <button onclick="handleChoice('-30 health,+10 happiness ')">Continue exploring</button>
        <button onclick="handleChoice('+10 health, +10 happiness')">Seek shelter immediately</button>
    </div>`,
];

function getRandomChildhoodChoice() {
  const randomIndex = Math.floor(Math.random() * childhoodChoices.length);

  const choice = childhoodChoices[randomIndex];
  console.log(choice);
  childhoodChoices.splice(randomIndex, 1);
  return choice;
}

function getRandomTeenChoice(gender) {
  if (gender === "woman") {
    const randomIndex = Math.floor(Math.random() * teenGirlChoices.length);
    const choice = teenGirlChoices[randomIndex];
    console.log(choice);
    teenGirlChoices.splice(randomIndex, 1);
    return choice;
  } else {
    const randomIndex = Math.floor(Math.random() * teenBoyChoices.length);
    const choice = teenBoyChoices[randomIndex];
    console.log(choice);
    teenBoyChoices.splice(randomIndex, 1);
    return choice;
  }
}

function getRandomYoungAdultChoice(){
    const randomIndex=Math.floor(Math.random()*youngAdultChoices.length)
    const choice=youngAdultChoices[randomIndex]
    youngAdultChoices.splice(randomIndex,1)
    return choice
}

export { childhoodChoices, getRandomChildhoodChoice, getRandomTeenChoice,getRandomYoungAdultChoice };
