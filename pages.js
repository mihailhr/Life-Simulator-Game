const welcomePage = `
    <h1>Welcome to Life Simulator</h1>
`;

const chooseNamePage = `
    <h2>Choose your name:</h2>
    <form id="name-form">
        <input type="text" name="username" id="username" minlength="5" required>
        <button type="submit">Continue</button>
    </form>
`;

const genderSelectPage = `
    <h1>Hello, <span id="username"></span>. You are a 6 years old</h1>
    <form id="gender-form">
        <select id="genderSelect" required>
            <option value="man">Boy</option>
            <option value="woman">Girl</option>
        </select>
        <button type="submit">Continue</button>
    </form>
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