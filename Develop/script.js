//pseudo code time
// calendar
// Create input field, save buttons
// append input field and save buttons, timeofDay[i] times
// js controls styling based on time of day, css changes color of input field backgrounds, queries moment.js for current time?
// Date display at top of screen (third line) centered, and queries moment.js for current date
// time blocks .textContent to left of input field, static
// Event listener for clicks, 
// user inputs information into input field - the save button saves to local storage
// for loop to iterate through times of day in left hand field, or get times from moment.js?
// each line of input has timeofDay[i]   input field    save button


// Variables
var dateCurrent = document.getElementById("currentDay");
var containerC1 = document.querySelector(".container");
var btn = document.querySelector(".saveBtn");
var inputBlock = document.querySelectorAll("textarea");
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
// clicking save buttons adds to localStorage

btn.addEventListener("click", function (event) {
    event.preventDefault();
    var inputText = inputBlock.value.trim();
    // if save is clicked without any input, nothing is added
    if (inputText === "") {
        return;
    }
    // adds the the inputItems array to be store in localStorage
    inputItems.push(inputText);
    inputBlock.value = "";
    // store update items to localStorage
    inputStore();
});
// checks localStorage to see if ithere is any items stored and if they are, assign to the inputDaily
function init () {
    var stored = JSON.parse(localStorage.getItem("inputItems"));
    if (stored !== null) {
    inputItems = stored;
    }
    console.log(stored);
}

inputStore();
init();