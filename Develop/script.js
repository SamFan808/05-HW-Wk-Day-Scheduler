var dateCurrent = document.getElementById("currentDay");
var containerC1 = document.querySelector(".container");
var btn = document.getElementsByTagName("button");
var inputBlock = document.getElementsByTagName("textarea");
var hourData = document.getElementsByClassName("hour");
var storeArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
// momentjs queries
var timeTest = moment();
var timeNow = moment();
dateCurrent.textContent = timeTest.format("dddd, MMMM Do");
// sets click event for each button and stores items into localStorage
for (let i = 0; i < inputBlock.length; i++) {
    btn[i].addEventListener("click", function (event) {
        event.preventDefault();
        setStore();
   });
}
function setStore () {
    for (i = 0; i < storeArray.length; i++) {
        localStorage.setItem(storeArray[i], (document.getElementById(storeArray[i]).value));
    }
}
function render () {
    for (i = 0; i < storeArray.length; i++) {
    document.getElementById(storeArray[i]).innerHTML+=(localStorage.getItem(storeArray[i]));
    }
}
// function to clear the page daily before it refreshes at 9AM
function clear () {
    var format = 'hh:mm:ss';
    var beforeTime = moment('23:59:00', format);
    var afterTime = moment('08:59:00', format);
    if (timeNow.isBetween(beforeTime, afterTime)) {
        for (i = 0; i < storeArray.length; i++) {
            localStorage.setItem(storeArray[i],"");
        }
        } else {
            console.log("is not between");
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
render();
colorTime();
clear();