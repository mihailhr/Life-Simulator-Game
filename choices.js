const childhoodChoices=[`<div id="choice">
    <h1>Your school's soccer team is holding tryouts. Do you participate to improve your athleticism or focus on your studies instead?</h1>
    <button onclick="handleChoice('-5 health,+20 athleticism,+5 sociability')">Try out for the soccer team</button>
    <button onclick="handleChoice('+10 intelligence,-5 athleticism')">Focus on studies</button>
</div>`,
`<div id="choice">
    <h1>You have the opportunity to take a part-time job after school. Do you take it to earn some extra money, or focus on your personal growth?</h1>
    <button onclick="handleChoice('-10 health,-10 intelligence,+20 wealth')">Take the job</button>
    <button onclick="handleChoice('+10 intelligence,+5 athleticism')">Focus on personal growth</button>
</div>
`,
`<div id="choice">
<h1>A group of students invites you to join their study group. Do you join them to improve your grades or decline to spend more time on hobbies?</h1>
<button onclick="handleChoice('+15 intelligence,+10 sociability,-5 athleticism')">Join the study group</button>
<button onclick="handleChoice('+10 athleticism,+5 health')">Decline and focus on hobbies</button>
</div>`,
`<div id="choice">
    <h1>Your teacher encourages you to participate in the upcoming school debate. Do you participate to improve your public speaking skills or avoid it to reduce stress?</h1>
    <button onclick="handleChoice('+20 intelligence,+10 sociability,-10 health')">Participate in the debate</button>
    <button onclick="handleChoice('+10 health,-5 sociability')">Avoid the debate</button>
</div>
`,
`<div id="choice">
    <h1>Your friends invite you on a weekend hiking trip. Do you go for the adventure or stay home to rest and save money?</h1>
    <button onclick="handleChoice('+10 health,+10 sociability,-10 wealth')">Go on the adventure</button>
    <button onclick="handleChoice('+10 wealth,+5 intelligence')">Stay home</button>
</div>
`,
`<div id="choice">
    <h1>Your favorite band is playing in town, but you have an important exam the next day. Do you attend the concert or stay home to study?</h1>
    <button onclick="handleChoice('-10 health,+10 sociability,-10 intelligence,-20 wealth')">Attend the concert</button>
    <button onclick="handleChoice('+20 intelligence,+10 health')">Stay home and study</button>
</div>
`,
`<div id="choice">
    <h1>A local charity is looking for volunteers. Do you spend your weekend helping out or use the time to relax?</h1>
    <button onclick="handleChoice('-10 health,+15 sociability,+5 intelligence')">Volunteer at the charity</button>
    <button onclick="handleChoice('+10 health')">Use the time to relax</button>
</div>
`,
`<div id="choice">
    <h1>The school’s track team is recruiting new members. Do you join the team to improve your fitness, or do you avoid it to focus on other interests?</h1>
    <button onclick="handleChoice('+20 athleticism,+10 health')">Join the track team</button>
    <button onclick="handleChoice('+10 intelligence')">Focus on other interests</button>
</div>
`

]

function getRandomChildhoodChoice(){
 const randomIndex=Math.floor(Math.random()*childhoodChoices.length)

 const choice= childhoodChoices[randomIndex]
 console.log(choice)
 childhoodChoices.splice(randomIndex,1)
 return choice
}


export{childhoodChoices,getRandomChildhoodChoice}