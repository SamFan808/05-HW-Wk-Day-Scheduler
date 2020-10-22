//pseudo code time
// calendar
// Create input field, save buttons
// append input field and save buttons, timeofDay[i] times
// js controls styling based on time of day, css changes color of input field backgrounds, queries moment.js for current time?
// Date display at top of screen (third line) centered, and queries moment.js for current date
// time blocks .textContent to left of input field, static
// Event listener for clicks, 
// user inputs information into input field - the save button saves to local storage
// for loop to iterate through times of day in left hand field
// each line of input has timeofDay[i]   input field    save button
// Variables
var body = document.body;
var dateCurrent = document.getElementById("currentDay");
var timeBlock = document.querySelector(".container");
var inputBlock = document.createElement("input");
var inputDiv = document.createElement("div");
var btnDiv = document.createElement("div");
var btn = document.createElement("button");
var text = document.createElement("textArea");
var br = document.createElement("br");
var timeofDay = ["9AM", "10AM", "11AM", "12PM", "1PM","2PM", "3PM", "4PM", "5PM", "6PM"];
var timeTest = moment();
dateCurrent.textContent = timeTest.format("dddd, MMMM Do");
timeBlock.textContent = "meow";
timeBlock.append(inputDiv);
inputDiv.setAttribute("class", "row");
timeBlock.style.borderStyle = "dashed";
