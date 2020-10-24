// Variables
var dateCurrent = document.getElementById("currentDay");
var containerC1 = document.querySelector(".container");
var btn = document.getElementsByTagName("button");
var inputBlock = document.getElementsByTagName("textarea");
// array to store hourly items
var inputItems = [];
// momentjs queries
var timeTest = moment();
var timeNow = moment().format('LT');
dateCurrent.textContent = timeTest.format("dddd, MMMM Do");
// function stores input to local storage
function inputStore () {
    localStorage.setItem("inputItems", JSON.stringify(inputItems));   
}
// for loop sets the input block attributes for each textarea
for (let i = 0; i < inputBlock.length; i++) {
        inputBlock[i].setAttribute("data-index", i);
}

for (let i = 0; i < inputBlock.length; i++) {
    btn[i].addEventListener("click", function (event) {
        event.preventDefault();
        // if save is clicked without any input, nothing is added
        var inputText = inputBlock[i].value.trim();
        if (inputText === "") {
        return;
        } else {
        // adds the the inputItems array to be store in localStorage
        inputItems.push(inputText);
        // store update items to localStorage
        inputStore();
        // renderList();
        }
    });
}
var stored = JSON.parse(localStorage.getItem("inputItems"));
// checks localStorage to see if there is any items stored and if they are, assign to the inputItems
function init () {
    if (stored !== null) {
    inputItems = stored;
    }
    // renderList();
}

init();

// function renderList () {
//     for (var i = 0; i < inputItems.length; i++) {
//         var inputs = inputItems[i];
//         inputBlock[i].textContent = inputs;
//         inputItems.splice("data-index", 2);
//     }
// }
// each input from textarea needs a unique identifier, each textarea needs a unique identifier (index#?), getItem needs to be placed back in each textarea 

// for loop to iterate through nodelist of buttons and textareas, added event listener to allow save button to store data in localStorage
