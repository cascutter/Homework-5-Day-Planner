// Time blocks
var myDaySchedule = {
    "9 AM" : "",
    "10 AM" : "",
    "11 AM" : "",
    "12 PM" : "",
    "1 PM" : "",
    "2 PM" : "",
    "3 PM" : "",
    "4 PM" : "",
    "5 PM" : "",
}
//When planner is opened, current day shows at top
$("#currentDay").text(moment().format('LLLL')); 

//
$("button").click(function() {
    value = $(this).siblings("textarea").val();
    hourOfDay = $(this).siblings("div").text();
    saveInput(hourOfDay, value);
});


//Time blocks for standard business hours
//Time blocks for that day are color-coded to show, past, present, and future
//Time blocks can be clicked and events can be entered
//Events entered are saved to local storage
//When page refreshes, events persist