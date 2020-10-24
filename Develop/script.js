// Variables
var dateCurrent = document.getElementById("currentDay");
var containerC1 = document.querySelector(".container");
var btn = document.getElementsByTagName("button");
var inputBlock = document.getElementsByTagName("textarea");
// array to store hourly items
var inputItems = [];
// momentjs queries
var timeTest = moment();
var timeNow = moment();
dateCurrent.textContent = timeTest.format("dddd, MMMM Do");

// function stores input to local storage
function inputStore () {
    localStorage.setItem("inputItems", JSON.stringify(inputItems));   
}
// for loop sets the input block attributes for each textarea
for (let i = 0; i < inputBlock.length; i++) {
}
// sets click event for each button and stores text from textarea into inputItems array

for (let i = 0; i < inputBlock.length; i++) {
    btn[i].addEventListener("click", function (event) {
        event.preventDefault();
        // if save is clicked without any input, nothing is added
        var inputText = inputBlock[i].value.trim();
        inputBlock[i].setAttribute("data-index", i);
        if (inputText === "") {
            return;
        } else {
        // adds the the inputItems array to be stored in localStorage
        inputItems.push(inputText);
        // store update items to localStorage
        inputStore();
        // renderList();
        }
    });
}
// checks localStorage to see if there is any items stored and if they are, assign to the inputItems
function init () {
    var stored = JSON.parse(localStorage.getItem("inputItems"));
    if (stored !== null) {
    inputItems = stored;
    }
    // renderList();
}
// function to clear the page daily before it refreshes at 9AM
function clear () {
    var format = 'hh:mm:ss';
    var beforeTime = moment('23:59:00', format);
    var afterTime = moment('08:59:00', format);
    if (timeNow.isBetween(beforeTime, afterTime)) {
        console.log('is between')
    } else {
        console.log('is not between')
    }
}
var hourData = document.getElementById("9am");
function colorTime () {
    if (hourData===moment().format("h")) {
        console.log("hit");
    } else {
        console.log("no hit");
    }
}
console.log(moment().format("ha"));
colorTime();
init();
clear();
inputStore();

// function renderList () {
//     for (var i = 0; i < inputItems.length; i++) {
//         var inputs = inputItems[i];
//         inputBlock[i].textContent = inputs;
//         inputItems.splice("data-index", 2);
//     }
// 

// each input from textarea needs a unique identifier, each textarea needs a unique identifier (index#?), getItem needs to be placed back in each textarea 

// for loop to iterate through nodelist of buttons and textareas, added event listener to allow save button to store data in localStorage

