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
// for loop to iterate through nodelist of buttons and textareas, added event listener to allow save button to store data in localStorage 
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function (event) {
        event.preventDefault();
        this.setAttribute("data-index", i);

        var inputText = inputBlock[i].value.trim();
        // if save is clicked without any input, nothing is added
        if (inputText === "") {
        return;
        }
        // adds the the inputItems array to be store in localStorage
        inputItems.push(inputText);
        // store update items to localStorage
        inputStore();
    });
}
// checks localStorage to see if ithere is any items stored and if they are, assign to the inputDaily
function init () {
    var stored = JSON.parse(localStorage.getItem("inputItems"));
    if (stored !== null) {
    inputItems = stored;
    }
    console.log(stored);
}
// function to clear the page daily before it refreshes at 9AM
function clear () {
    var opening = moment('9:00 AM', 'LT');
    var closing = moment('5:00 PM', 'LT');
    console.log(opening);
    // if (timeNow.isAfter(opening) && currentTime.isBefore(closing)){
    console.log("It's business time!")
    }
  
    // if ("8:59 AM" > timeNow > "11:59 PM" ) {
    //     // inputItems = ""
    //     console.log("something is working")
    // //something local time
    // } else {
    // console.log("poopty poopty pants");
    // }


clear();
inputStore();
init();
