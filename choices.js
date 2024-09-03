


const childhoodChoices= [
    `<div id="choice">
        <h1>You find a shiny pebble on the playground. Do you keep it for yourself or give it to a friend who loves collecting pebbles?</h1>
        <button onclick="handleChoice('+10 wealth,+5 intelligence')">Keep it</button>
        <button onclick="handleChoice('+10 sociability')">Give it to a friend</button>
    </div>`,

    `<div id="choice">
        <h1>It’s storytime at school, and you have the chance to choose the book. Do you pick a fun adventure story or a book with lots of facts?</h1>
        <button onclick="handleChoice('+10 intelligence')">Pick the fact book</button>
        <button onclick="handleChoice('+10 sociability,+5 intelligence')">Pick the adventure story</button>
    </div>`,

    `<div id="choice">
        <h1>Your teacher asks for a helper to pass out the crayons. Do you volunteer to help or let someone else have a turn?</h1>
        <button onclick="handleChoice('+10 sociability')">Volunteer to help</button>
        <button onclick="handleChoice('+5 intelligence')">Let someone else help</button>
    </div>`,

    `<div id="choice">
        <h1>At recess, your friends want to play tag, but you feel like drawing instead. Do you join the game or stick with drawing?</h1>
        <button onclick="handleChoice('+10 athleticism,+5 sociability')">Play tag</button>
        <button onclick="handleChoice('+10 intelligence')">Draw instead</button>
    </div>`,

    `<div id="choice">
        <h1>There’s a big puzzle in the classroom that no one has finished yet. Do you try to solve it or play with the building blocks instead?</h1>
        <button onclick="handleChoice('+15 intelligence')">Try to solve the puzzle</button>
        <button onclick="handleChoice('+10 sociability')">Play with the building blocks</button>
    </div>`,

    `<div id="choice">
        <h1>Your class is painting a big mural together. Do you pick up a paintbrush to help or watch your friends paint?</h1>
        <button onclick="handleChoice('+10 sociability,+5 intelligence')">Help paint the mural</button>
        <button onclick="handleChoice('+5 intelligence')">Watch your friends paint</button>
    </div>`,

    `<div id="choice">
        <h1>You find an extra cookie in your lunchbox. Do you eat it or share it with a friend?</h1>
        <button onclick="handleChoice('+5 health,+10 wealth')">Eat the cookie</button>
        <button onclick="handleChoice('+10 sociability')">Share it with a friend</button>
    </div>`,

    `<div id="choice">
        <h1>During free time, you can choose to build with blocks or read a picture book. Which do you choose?</h1>
        <button onclick="handleChoice('+10 intelligence')">Read the picture book</button>
        <button onclick="handleChoice('+5 intelligence,+5 sociability')">Build with blocks</button>
    </div>`,

    `<div id="choice">
        <h1>Your class is having a sing-along. Do you sing loudly with everyone or quietly hum along?</h1>
        <button onclick="handleChoice('+10 sociability,+5 health')">Sing loudly</button>
        <button onclick="handleChoice('+5 intelligence')">Hum quietly</button>
    </div>`,

    `<div id="choice">
        <h1>It’s craft time, and you can choose to make a card for someone special or build a complex paper airplane. What do you choose?</h1>
        <button onclick="handleChoice('+10 sociability')">Make a card</button>
        <button onclick="handleChoice('+10 intelligence')">Build a paper airplane</button>
    </div>`, 

     `<div id="choice">
    <h1>It's raining outside, and you have the choice to jump in puddles or stay inside and color. What do you choose?</h1>
    <button onclick="handleChoice('+10 health,+10 athleticism')">Jump in puddles</button>
    <button onclick="handleChoice('+10 intelligence')">Stay inside and color</button>
</div>`,

`<div id="choice">
    <h1>Your friend wants to play a board game, but you were planning to build a fort. Do you join your friend or stick to your plan?</h1>
    <button onclick="handleChoice('+10 sociability')">Play the board game</button>
    <button onclick="handleChoice('+10 intelligence,+5 athleticism')">Build the fort</button>
</div>`,

`<div id="choice">
    <h1>You find a new book at the library. Do you read it right away or wait to read it at home with your family?</h1>
    <button onclick="handleChoice('+10 intelligence')">Read it right away</button>
    <button onclick="handleChoice('+10 sociability')">Wait to read it with your family</button>
</div>`,

`<div id="choice">
    <h1>At snack time, you can choose between a healthy apple or a tasty cupcake. Which one do you pick?</h1>
    <button onclick="handleChoice('+10 health')">Eat the apple</button>
    <button onclick="handleChoice('+5 health,+5 wealth')">Eat the cupcake</button>
</div>`,

`<div id="choice">
    <h1>You see a classmate sitting alone during lunch. Do you sit with them to keep them company or join your usual group?</h1>
    <button onclick="handleChoice('+15 sociability')">Sit with them</button>
    <button onclick="handleChoice('+5 sociability,+5 intelligence')">Join your usual group</button>
</div>`,
`<div id="choice">
        <h1>Your teacher asks for a helper to water the class plants. Do you volunteer or let someone else do it?</h1>
        <button onclick="handleChoice('+10 health,+5 sociability')">Volunteer to water the plants</button>
        <button onclick="handleChoice('+10 intelligence')">Let someone else do it</button>
    </div>`,

    `<div id="choice">
        <h1>It's art time, and you can choose between painting a picture or making a clay sculpture. What do you choose?</h1>
        <button onclick="handleChoice('+10 intelligence')">Paint a picture</button>
        <button onclick="handleChoice('+10 intelligence,+5 sociability')">Make a clay sculpture</button>
    </div>`,

    `<div id="choice">
        <h1>Your friend is having a hard time with a puzzle. Do you offer to help them or finish your own project first?</h1>
        <button onclick="handleChoice('+10 sociability,+5 intelligence')">Offer to help your friend</button>
        <button onclick="handleChoice('+10 intelligence')">Finish your own project</button>
    </div>`,

    `<div id="choice">
        <h1>During gym class, you can choose to play a team game or practice running. Which do you prefer?</h1>
        <button onclick="handleChoice('+15 athleticism,+10 sociability')">Play a team game</button>
        <button onclick="handleChoice('+10 athleticism,+5 health')">Practice running</button>
    </div>`,

    `<div id="choice">
        <h1>You find a pretty shell on the beach. Do you keep it as a souvenir or give it to a friend?</h1>
        <button onclick="handleChoice('+10 wealth,+5 intelligence')">Keep the shell</button>
        <button onclick="handleChoice('+10 sociability')">Give it to a friend</button>
    </div>`,
    `<div id="choice">
        <h1>You see a bright, shiny object in the middle of the road. Do you run to pick it up or stay on the sidewalk where it’s safe?</h1>
        <button onclick="handleChoice('-100 health')">Run to pick it up</button>
        <button onclick="handleChoice('+10 intelligence')">Stay on the sidewalk</button>
    </div>`,

    `<div id="choice">
        <h1>You find some berries in the forest. They look tasty, but you're not sure if they're safe to eat. Do you eat the berries or leave them alone?</h1>
        <button onclick="handleChoice('-100 health')">Eat the berries</button>
        <button onclick="handleChoice('+10 intelligence')">Leave them alone</button>
    </div>`,`
    <div id="choice">
    <h1>You see a deep pond in the park, and there's a sign that says "No Swimming." Do you ignore the sign and jump in, or do you stay on the shore and play safely?</h1>
    <button onclick="handleChoice('-100 health')">Jump in the pond</button>
    <button onclick="handleChoice('+10 intelligence')">Stay on the shore</button>
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
        <button onclick="handleChoice('-100 health')">Participate in the challenge</button>
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
        <button onclick="handleChoice('-100 health')">Ride the bike</button>
        <button onclick="handleChoice('+10 intelligence')">Avoid the bike</button>
    </div>`,

    `<div id="choice">
        <h1>You discover a new online challenge that’s gone viral, but it involves dangerous stunts. Do you participate or skip it?</h1>
        <button onclick="handleChoice('-100 health')">Participate in the challenge</button>
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