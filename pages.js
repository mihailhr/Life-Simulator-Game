const welcomePage = `
    <div id="welcome">
    <video autoplay muted loop id="welcomeVideo">
  <source src="/Life-Simulator-Game/Videos/aesthetic-landscape-with-train.3840x2160.mp4" type="video/mp4">
</video>
    <section> <h1>Welcome to Life Simulator</h1>
        <button >Start!</button></section>
   
</div>
`;

const chooseNamePage = `
    <div id="chooseName">
    <h2>Choose your name:</h2>
    <form id="name-form" >
        <input type="text" name="username" id="username" minlength="3" required> <br/>
        <button type="submit" >Continue</button>
    </form>
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
<div id="choice">
    
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
        <h1>You are dead.</h1>

        
    </div>`

const teenPage=`
<div id="choice">
    <h1>Congrats, <span id="name"></span>, you are not a child anymore. You are slowly turning into a young <span id="gender"></span>. <br/> Be careful! Your next choices are going to have a major influence on your character.</h1>
    <h2>As of now, it is your <span id="quality"></span> that stands out the most to others.</h2>

    
</div>`
const adultPage=`
<div id="choice">
    <h1><span id="name"></span>, you are now a young <span id="gender"></span>. Each quality that you lack can now destroy your life.</h1>
    <h2>Your <span id="quality"></span> is outstanding.</h2>

    
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
    <button onclick="handleChoice('+10 wealth')">Continue</button>
    
</div>`


const finishedUniPage=`
<div id="choice">
    <h1>A few years later you graduated successfully. As you are now highly educated, your income has tripled.</h1>
</div>`


export{welcomePage,chooseNamePage,genderSelectPage,nationalityPage,finishedUniPage,cantApplyToUniversityPage,choiceTemplate,deadPage,teenPage,adultPage,movingOutPage,applyToUniversityPage}