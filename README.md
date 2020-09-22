# Homework 5: Day Planner

Homework 5: Day Planner is a simple calendar application that allows the user to save events for each hour of the work day. It runs in the browser and features dynamically updated HTML and CSS powered by JavaSCript using jQuery.

## Motivation

This project was created to show an understanding of jQuery and client-side storage to create a browser-based, interactive application. It combines knowledge of HTML, CSS, JavaScript, jQuery, moment.js, and basic web APIs.

### Example of jQuery 
```
$(document).ready(function () {

    // Displays and updates time/date 
    var calendarTime = function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));
    }; 
    calendarTime()
    setInterval(calendarTime, 1000);
```

### Features

<img src="https://media.giphy.com/media/MBZHgQ0ldDrPlyWzQX/giphy.gif">

* When the planner is opened, the current day and time are displayed at the top. Hour and minute update in real time.

* When the user scrolls down, they are presented with timeblocks for the day.

* Each timeblock is color coded to indicate whether it is in the past, present, or future.

* When user clicks into a timeblock, they can enter an event.

* When the user clicks the 'save' button, the text for that event is saved in local storage.

* When user refreshed the page, the event persists.

* When the user clicks the 'clear' button, the text within the timeblock is cleared from the window and local storage.

## Author

* Boilerplate HTML and CSS supplied by Trilogy Edu.

* JavaScript using jQuery, additional styling and adjustments made to CSS written by Casandra Cutter

* H/t: MDN web docs; w3schools.com; api.jQuery.com; GitHub; stackoverflow.com; Danielle Bowman; David Garza

## License
MIT
