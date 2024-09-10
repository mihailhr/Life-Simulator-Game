const welcomePage = `
    <div id="welcome">
    
    <section> <h1>Welcome to Life Simulator</h1>
        <button >Start!</button></section>
   
</div>
`;

const chooseNamePage = `
    <div id="chooseName">
    <h2>Choose your name:</h2>
    <input type="text" name="username" id="username" required> <br/>
    <button id="continue" >Continue</button>
</div>
`;

const genderSelectPage = `
    <div id="chooseGender">
    
    <h1>Choose your gender</h1>
    <section>
        <div id="womanOption" >
            <img src="/Life-Simulator-Game/Images/35836.jpg" alt="">
        </div>
        <div id="manOption">
            <img src="/Life-Simulator-Game/Images/35837.jpg" alt="">
        </div>
    </section>
    
    <button>Continue</button>
</div>


`;
const nationalityPage = `
<div id="nationalityPage">
<h1>You were born in <span id="nationality"></span> 6 years ago.</h1>

</div>
`;
const choiceTemplate=`
<div >
    
    <div id="currentChoice">

    </div>

    <button id="refresh">Restart</button>
   <article id="statsField">
    <i class="fa-solid fa-info"></i>
    <section id="stats">

        
        <ul>
            <li>Age: <span id="age"></span></li>
            <li>Health: <span id="health"></span></li>
            <li>Intelligence: <span id="intelligence"></span></li>
            <li>Sociability: <span id="sociability"></span></li>
            <li>Athleticism: <span id="athleticism"></span></li>
            <li>Wealth: <span id="wealth"></span></li>
            <li>Stress: <span id="stress"></span></li>
            <li>Happiness: <span id="happiness"></span></li>
        </ul>
    </section>
</article>
</div>
`
const deadPage=`
<div id="choice">
        <h1>Game over</h1>
        <h1><span id="message"></span></h1>

        
    </div>`

const teenPage=`
<div id="choice">
    <h1>Congrats, <span id="name"></span>, you are not a child anymore. You are slowly turning into a young <span id="gender"></span>. <br/> Be careful! Your next choices are going to have a major influence on your character.</h1>
    <h2>As of now, it is your <span id="quality"></span> that stands out the most to others.</h2>

    
</div>`
const adultPage=`
<div id="choice">
    <h1><span id="name"></span>, you are now a young <span id="gender"></span>. Every single decision can change your life.</h1>
    <h2>As of now, <span id="quality"></span> is your sharpest tool.</h2>

    
</div>
`
const movingOutPage=`<div id="choice">
    <h1>As an adult you have no choice but to move out and start working to support yourself.</h1>
    
</div>`

const applyToUniversityPage=`<div id="choice">
    <h1>Do you apply to university? It will take a few years of your life but it might be beneficial.</h1>
   
    <button onclick="handleChoice('+10 graduate')">Yes</button>
    <button onclick="handleChoice('-10 graduate')">No</button>
</div>`
const cantApplyToUniversityPage=`<div id="choice">
    <h1>As your intelligence was not surprisingly high, it was not possible for you to enroll in university</h1>
    <button onclick="handleChoice('+10 nothing')">Continue</button>
    
</div>`


const finishedUniPage=`
<div id="choice">
    <h1>A few years later you graduated successfully. As you are now highly educated, your income has tripled.</h1>
</div>`
const marryPage=`
<div id="choice">
    <h1>You and your partner are contemplating marriage. Do you want a spectacular ceremony or prefer not to get involved with formalities?</h1>
     <button onclick="handleChoice('+1 married')">Start planning your wedding</button>
    <button onclick="handleChoice('-1 married')">Stay unmarried</button>
</div>`
const marriedPage=
`<div id="choice">
    <h1>Your wedding was great.</h1>
    <h2><span id="familyMembers"></span></h1>
    <button onclick="handleChoice('+10 happiness')">Continue</button>
</div>`
const cantMarryPage=`
<div id="choice">
    <h1>As you were never a extroverted social person throughout your life, you couldn't find a partner suitable for a long-term relationship.</h1>
    <button onclick="handleChoice('-20 happiness')">Continue</button>
</div>`

const inheritancePage=`<div id="choice">
    <h1>Sadly, your beloved <span id='familyMember'></span> has passed away. You attended the funeral and were informed that you have inherited $<span id="inheritanceNum"></span>.</h1>
    <button onclick="handleChoice('-15 happiness')">Continue</button>
   
</div>
`
const kidBirthday=`<div id="choice">
    <h1>It's your kid's 18th birthday today! You wished them all the best</h1>
    <button onclick="handleChoice('+5 happiness,-5 stress')">Continue</button>
   
</div>
`
const gameEndPage=`<div id="choice">
    <h1>You've reached the age of 70 and the hardest times of your life are over.</h1>
    <h1>You live the rest of your life peacefully, remembering all the things you've went through.</h1>
   
</div>
`


const rebirthPage=`

<div id="choice">
    <h1>At the age of 85, you passed away.</h1>
    <h1>You will be long remembered.</h1>
    
</div>
`




export{welcomePage,inheritancePage,kidBirthday,marryPage,gameEndPage,rebirthPage,chooseNamePage,genderSelectPage,nationalityPage,cantMarryPage,finishedUniPage,marriedPage,cantApplyToUniversityPage,choiceTemplate,deadPage,teenPage,adultPage,movingOutPage,applyToUniversityPage}