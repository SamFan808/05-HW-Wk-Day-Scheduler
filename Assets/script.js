var dateCurrent = document.getElementById("currentDay");
var containerC1 = document.querySelector(".container");
var btn = document.getElementsByTagName("button");
var inputBlock = document.getElementsByTagName("textarea");
var hourData = document.getElementsByClassName("hour");
var textHour = document.getElementsByClassName("text");
var storeArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var timeNow = moment();
dateCurrent.textContent = timeNow.format("dddd, MMMM Do");
// sets click event for each button and stores items into localStorage
for (let i = 0; i < inputBlock.length; i++) {
    btn[i].addEventListener("click", function (event) {
        event.preventDefault();
        setStore();
    });
}
// puts events into localStorage
function setStore () {
    for (i = 0; i < storeArray.length; i++) {
        localStorage.setItem(storeArray[i], (document.getElementById(storeArray[i]).value));
    }
}
// retrieves events from localStorage
function render () {
    for (i = 0; i < storeArray.length; i++) {
        var stored = (localStorage.getItem(storeArray[i]));
        if (stored !== null) {
            (document.getElementById(storeArray[i]).innerHTML+=localStorage.getItem(storeArray[i]));
        }
    }   
}
// function to clear the page daily at midnight, otherwise get scheduler items
function clear () {
    var clearTime = moment("00:00", "HH:mm");
    if (timeNow === clearTime) {
        for (i = 0; i < storeArray.length; i++) {
            localStorage.setItem(storeArray[i],"");
        }
    }   else {
            render();
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