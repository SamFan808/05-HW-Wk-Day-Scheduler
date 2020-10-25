// Variables
var dateCurrent = document.getElementById("currentDay");
var containerC1 = document.querySelector(".container");
var btn = document.getElementsByTagName("button");
var inputBlock = document.getElementsByTagName("textarea");
var hourData = document.getElementsByClassName("hour");
// array to store hourly items
// var inputItems = [];
// momentjs queries
var timeTest = moment();
var timeNow = moment();
dateCurrent.textContent = timeTest.format("dddd, MMMM Do");

// function stores input to local storage
// function inputStore () {
//     localStorage.setItem("inputItems", JSON.stringify(inputItems));   
// }

// sets click event for each button and stores text from textarea into inputItems array
// for (let i = 0; i < inputBlock.length; i++) {
//     btn[i].addEventListener("click", function (event) {
//         event.preventDefault();
//         // if save is clicked without any input, nothing is added
//         var inputText = inputBlock[i].value.trim();
//          //may not need this
//         if (inputText === "") {
//             return;
//         } else {
//         // adds the the inputItems array to be stored in localStorage
//         // inputItems.push(inputText);
//         // store update items to localStorage
//         // inputStore();
//         renderTime();
//         }
//     });
// }
// function clickStore () {
//     document.querySelector("button").addEventListener("click", function (event) {
//     event.preventDefault();


    



document.querySelector("button").addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target != "button") {

        localStorage.setItem("9am", (document.getElementById("9am").value));
        localStorage.setItem("10am", (document.getElementById("10am").value));
        localStorage.setItem("11am", (document.getElementById("11am").value));
        localStorage.setItem("12pm", (document.getElementById("12pm").value));
        localStorage.setItem("1pm", (document.getElementById("1pm").value));
        localStorage.setItem("2pm", (document.getElementById("2pm").value));
        localStorage.setItem("3pm", (document.getElementById("3pm").value));
        localStorage.setItem("4pm", (document.getElementById("4pm").value));
        localStorage.setItem("5pm", (document.getElementById("5pm").value));
        }
});

function render () {
    document.getElementById("9am").innerHTML+=(localStorage.getItem("9am"));
    document.getElementById("10am").innerHTML+=(localStorage.getItem("10am"));
}
render();
// function renderTime () {
//     for (let i = 0; i < inputBlock.length; i++) {
//         var item = inputItems[i];
//         inputBlock[i].setAttribute("data-index", i);
//         inputBlock[i].textContent = item
//         console.log(item);
//     }
// }
//maybe localStorage needs 
// checks localStorage to see if there is any items stored and if they are, assign to the inputItems
// function init () {
//     var stored = JSON.parse(localStorage.getItem("inputItems"));
//     if (stored !== null) {
//     inputItems = stored;
//     }
//     // renderTime();
// }
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
// function sets current, future, and past color indicators
function colorTime () {
    for (let i = 0; i < hourData.length; i++) {
        var hourNum = hourData[i].dataset.hour;
        if (hourNum === moment().format("HH")) {
            inputBlock[i].className = 'present col-sm';
        } else if 
            (hourNum >= moment().format("HH")) {
            inputBlock[i].className = 'future col-sm'; 
        } else {
            inputBlock[i].className = 'past col-sm';
        }
    }
}

colorTime();
clear();

// inputStore();

// console.log(inputItems);

// each input from textarea needs a unique identifier, each textarea needs a unique identifier (index#?), getItem needs to be placed back in each textarea 

// for loop to iterate through nodelist of buttons and textareas, added event listener to allow save button to store data in localStorage

