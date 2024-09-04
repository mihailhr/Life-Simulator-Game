


const childhoodChoices= [
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
    </div>`
];


const teenGirlChoices = [
    `<div id="choice">
        <h1>Your friends are planning a sleepover this weekend. Do you join the fun or stay home to work on a big project?</h1>
        <button onclick="handleChoice('+10 sociability,+5 happiness')">Join the sleepover</button>
        <button onclick="handleChoice('+10 intelligence')">Stay home and work on the project</button>
    </div>`,

    `<div id="choice">
        <h1>There’s a new makeup line you’ve been wanting to try, but it’s quite expensive. Do you buy it or save your money for something else?</h1>
        <button onclick="handleChoice('-20 wealth,+5 confidence')">Buy the makeup</button>
        <button onclick="handleChoice('+20 wealth')">Save your money</button>
    </div>`,

    `<div id="choice">
        <h1>Your school is organizing a dance competition. Do you enter the competition or watch from the audience?</h1>
        <button onclick="handleChoice('+15 confidence,+10 sociability')">Enter the competition</button>
        <button onclick="handleChoice('+10 sociability')">Watch from the audience</button>
    </div>`,

    `<div id="choice">
        <h1>You can either go on a weekend shopping spree with friends or spend the day volunteering at a local animal shelter. What’s your choice?</h1>
        <button onclick="handleChoice('-10 wealth,+15 happiness')">Shopping spree with friends</button>
        <button onclick="handleChoice('+10 sociability,+10 happiness')">Volunteer at the shelter</button>
    </div>`,

    `<div id="choice">
        <h1>You’re invited to a weekend party, but you also have a big exam coming up. Do you go to the party or stay in and study?</h1>
        <button onclick="handleChoice('+10 sociability,-15 stress')">Go to the party</button>
        <button onclick="handleChoice('+20 intelligence,-10 sociability')">Stay in and study</button>
    </div>`,

    `<div id="choice">
        <h1>Your favorite author is coming to town for a book signing. Do you attend the event or use the time to work on your personal blog?</h1>
        <button onclick="handleChoice('+15 happiness,+5 sociability')">Attend the book signing</button>
        <button onclick="handleChoice('+10 intelligence')">Work on your personal blog</button>
    </div>`,

    `<div id="choice">
        <h1>You find a new fashion trend online that you want to try. Do you buy the clothes or stick with your current style?</h1>
        <button onclick="handleChoice('-15 wealth,+10 confidence')">Buy the new clothes</button>
        <button onclick="handleChoice('+10 confidence')">Stick with your current style</button>
    </div>`,

    `<div id="choice">
        <h1>Your friends are planning a group trip to a theme park. Do you go with them or stay home to focus on your hobbies?</h1>
        <button onclick="handleChoice('+20 sociability,-10 wealth')">Go to the theme park</button>
        <button onclick="handleChoice('+15 happiness')">Stay home and focus on hobbies</button>
    </div>`,

    `<div id="choice">
        <h1>There's a new workout class you’ve been wanting to try. Do you join the class or stick with your current exercise routine?</h1>
        <button onclick="handleChoice('+10 fitness,+5 sociability')">Join the new workout class</button>
        <button onclick="handleChoice('+10 fitness')">Stick with your current routine</button>
    </div>`,

    `<div id="choice">
        <h1>You’ve been invited to participate in a local art exhibition. Do you showcase your artwork or take some time off for relaxation?</h1>
        <button onclick="handleChoice('+20 confidence,+10 sociability')">Showcase your artwork</button>
        <button onclick="handleChoice('+10 relaxation')">Take time off for relaxation</button>
    </div>`,`<div id="choice">
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
        <button onclick="handleChoice('-100 health')">Ride the bike</button>
        <button onclick="handleChoice('+10 intelligence')">Avoid the bike</button>
    </div>`,

    `<div id="choice">
        <h1>You discover a new online challenge that’s gone viral, but it involves dangerous stunts. Do you participate or skip it?</h1>
        <button onclick="handleChoice('-50 health')">Participate in the challenge</button>
        <button onclick="handleChoice('+10 happiness')">Skip the challenge</button>
    </div>`
];
const teenBoyChoices= [
    `<div id="choice">
        <h1>Your friends are organizing a weekend sports tournament. Do you join the team or spend the time playing video games?</h1>
        <button onclick="handleChoice('+15 fitness,+10 sociability')">Join the sports tournament</button>
        <button onclick="handleChoice('+10 happiness')">Play video games</button>
    </div>`,

    `<div id="choice">
        <h1>A new gaming console has been released, but it’s quite pricey. Do you buy it or save your money for future needs?</h1>
        <button onclick="handleChoice('-20 wealth,+10 happiness')">Buy the console</button>
        <button onclick="handleChoice('+20 wealth')">Save your money</button>
    </div>`,

    `<div id="choice">
        <h1>Your school is holding a coding competition. Do you enter the competition or hang out with friends?</h1>
        <button onclick="handleChoice('+15 intelligence,+10 confidence')">Enter the coding competition</button>
        <button onclick="handleChoice('+10 sociability')">Hang out with friends</button>
    </div>`,

    `<div id="choice">
        <h1>You’ve been invited to a weekend camping trip with friends. Do you go on the trip or stay home to work on a personal project?</h1>
        <button onclick="handleChoice('+20 sociability,-10 wealth')">Go camping</button>
        <button onclick="handleChoice('+15 intelligence')">Work on the personal project</button>
    </div>`,

    `<div id="choice">
        <h1>There’s a new superhero movie out, but you also have a big test coming up. Do you watch the movie or study for the test?</h1>
        <button onclick="handleChoice('+10 happiness,-15 stress')">Watch the movie</button>
        <button onclick="handleChoice('+20 intelligence,-10 sociability')">Study for the test</button>
    </div>`,

    `<div id="choice">
        <h1>Your favorite sports team is playing a big match. Do you go to the game or stay home to complete an important assignment?</h1>
        <button onclick="handleChoice('+15 fitness,+10 happiness')">Go to the game</button>
        <button onclick="handleChoice('+20 intelligence')">Complete the assignment</button>
    </div>`,

    `<div id="choice">
        <h1>You find a cool tech gadget online that you really want. Do you buy it now or save up for other things?</h1>
        <button onclick="handleChoice('-15 wealth,+10 interest')">Buy the tech gadget</button>
        <button onclick="handleChoice('+20 wealth')">Save up for other things</button>
    </div>`,

    `<div id="choice">
        <h1>You’re invited to a local sports camp. Do you join the camp or spend the time working on your gaming skills?</h1>
        <button onclick="handleChoice('+20 fitness,+10 sociability')">Join the sports camp</button>
        <button onclick="handleChoice('+15 gaming skills')">Work on your gaming skills</button>
    </div>`,

    `<div id="choice">
        <h1>Your school is hosting a talent show. Do you perform in the show or cheer for your friends from the audience?</h1>
        <button onclick="handleChoice('+20 confidence,+10 sociability')">Perform in the show</button>
        <button onclick="handleChoice('+10 sociability')">Cheer for your friends</button>
    </div>`,

    `<div id="choice">
        <h1>There’s a new video game tournament coming up. Do you enter the tournament or relax at home?</h1>
        <button onclick="handleChoice('+15 gaming skills,+5 sociability')">Enter the tournament</button>
        <button onclick="handleChoice('+10 relaxation')">Relax at home</button>
    </div>`,`<div id="choice">
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
        <button onclick="handleChoice('-60 health')">Ride the bike</button>
        <button onclick="handleChoice('+10 intelligence')">Avoid the bike</button>
    </div>`,

    `<div id="choice">
        <h1>You discover a new online challenge that’s gone viral, but it involves dangerous stunts. Do you participate or skip it?</h1>
        <button onclick="handleChoice('-50 health')">Participate in the challenge</button>
        <button onclick="handleChoice('+10 happiness')">Skip the challenge</button>
    </div>`
];








function getRandomChildhoodChoice(){
 const randomIndex=Math.floor(Math.random()*childhoodChoices.length)

 const choice= childhoodChoices[randomIndex]
 console.log(choice)
 childhoodChoices.splice(randomIndex,1)
 return choice
}

function getRandomTeenChoice(gender){
    if(gender==="woman"){
        const randomIndex=Math.floor(Math.random()*teenGirlChoices.length)
    const choice= teenGirlChoices[randomIndex]
    console.log(choice)
    teenGirlChoices.splice(randomIndex,1)
    return choice
    }else{
        const randomIndex=Math.floor(Math.random()*teenBoyChoices.length)
    const choice= teenBoyChoices[randomIndex]
    console.log(choice)
    teenBoyChoices.splice(randomIndex,1)
    return choice
    }
}


export{childhoodChoices,getRandomChildhoodChoice,getRandomTeenChoice}