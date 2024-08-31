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

const root=document.getElementById("content")
let username
let gender





root.innerHTML=welcomePage
setTimeout(() => {
    root.innerHTML=chooseNamePage
    const form=document.getElementsByTagName("form")[0]
    form.addEventListener("submit",chooseName)
}, 4000);
function chooseName(e){
    e.preventDefault()
    const nameField=document.getElementById("username")
    username=nameField.value
    chooseGender()
}
function chooseGender(){
    // e.preventDefault()
    root.innerHTML=genderSelectPage
    const usernameField=document.getElementById("username")
    usernameField.textContent=username
    const form=document.getElementsByTagName("form")[0]
    form.addEventListener("submit",makeFirstDecision)
}


function makeFirstDecision(e){
e.preventDefault()
const selectedGenderField=document.getElementById("genderSelect")
gender=selectedGenderField.value
console.log(gender)
}

