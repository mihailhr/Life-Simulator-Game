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
    

    
</div>`



export{welcomePage,chooseNamePage,genderSelectPage,nationalityPage,choiceTemplate,deadPage,teenPage}