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
var body = document.body;
var dateCurrent = document.getElementById("currentDay");
var containerC1 = document.querySelector(".container");
var timeBlock = document.createElement("div");
var inputBlock = document.createElement("input");
var inputD1 = document.createElement("div");
var inputD2 = document.createElement("div");
var btnDiv = document.createElement("div");
var hourWork = document.createElement("div");
var btn = document.createElement("button");
var text = document.createElement("input");
var br = document.createElement("br");

// array to store hourly items
var inputItem = [];

// momentjs queries
var timeTest = moment();
var timeNow = moment().format('LT');
dateCurrent.textContent = timeTest.format("dddd, MMMM Do");

// work day hours 8-6 forloop
    for (var hour = 8; hour <= 18; hour++) {
        var index = hour - 8;
        renderTime();
        console.log(hour);
    }
function renderTime () {
    // create time block
        containerC1.append(timeBlock);
        timeBlock.setAttribute("class","time-block");
        timeBlock.append(inputD1);
        inputD1.setAttribute("class", "row");

    // create time of day block
        inputD1.append(hourWork);
        hourWork.setAttribute("class", "col-md-2");
        hourWork.setAttribute("id","hour");
    // create input field block
        inputD1.append(inputD2);
        inputD2.setAttribute("class", "col-md");
        inputD2.appendChild(inputBlock);
    // create button block
        inputD1.append(btn);
        btn.setAttribute("class","col-md-1");
        btn.setAttribute("id","saveBtn");
}
// save button to store input field in local storage
function inputStore () {
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        var inputItem = inputBlock.value;
        localStorage.setItem("inputItem", JSON.stringify(inputItem));  
    });
}
// checks localStorage to see if ithere is any items stored and if they are, assign to the inputDaily
function init () {
    var stored = JSON.parse(localStorage.getItem("inputItem"));
    if (stored !== null) {
        inputItem = stored;
    }
    renderTime();
}

inputStore();
init();
console.log(timeNow);
console.log(inputItem);