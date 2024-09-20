let insertName = ``;
let insertWork = ``;
let insertMeal = ``;

function setName(nameInput) {
    insertName = nameInput;
}

function setWork(workInput) {
    insertWork = workInput;
}

function setMeal(mealInput) {
    insertMeal = mealInput;
}

function clearAll() {
    insertName = '';
    insertWork = '';
    insertMeal = '';

    updateWiev();
}

updateWiev()
function updateWiev() {  // MVC for input feltene og knappene - submit, clear all og get random answer.
    let htmlStr = /*HTML*/ `
    
    <div id="wrapper">

        <h2 style="text-align: center;">Input Felt</h2>

        <div id="containerTwo">
            <div>Name:</div><div class="answer1">${insertName}</div>
            <br />
            <div>Age:</div><div class="answer1">${insertWork}</div>
            <br />
            <div>Work:</div><div class="answer1">${insertMeal}</div>
        </div>

        <div id="containerThree">
            Name: <input onchange="setName(this.value)" />
            Age: <input onchange="setWork(this.value)" />
            Work: <input onchange="setMeal(this.value)" />
            <br />
            <button id="buttonSubmit" class="answer" onclick="updateWiev()">Submit</button> 
            <button id="buttonSubmit" class="answer" onclick="clearAll()">Clear All</button>
        </div>

    </div>
    `;

    document.getElementById('app').innerHTML = htmlStr;
}
