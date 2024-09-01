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
    <video autoplay muted loop id="welcomeVideo">
        <source src="/Life-Simulator-Game/Videos/856460-uhd_3840_2160_30fps.mp4" type="video/mp4">
      </video>
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
<h1>You were born in <span id="nationality"></span>.</h1>
`;
const firstChildhoodChoicePage=`<div class="classroom">
    <section>
        <h1>It is your first day at school!</h1>
        <h2>Your classmates invited you to play a multiplayer game together.</h2>
    </section>
</div>`


export{welcomePage,chooseNamePage,genderSelectPage,nationalityPage,firstChildhoodChoicePage}