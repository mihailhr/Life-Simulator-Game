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
    </div>`
];

function getRandomChildhoodChoice(){
 const randomIndex=Math.floor(Math.random()*childhoodChoices.length)

 const choice= childhoodChoices[randomIndex]
 console.log(choice)
 childhoodChoices.splice(randomIndex,1)
 return choice
}


export{childhoodChoices,getRandomChildhoodChoice}