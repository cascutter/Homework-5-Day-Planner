$(document).ready(function () {

    // Displays and updates time/date 
    const calendarTime = function () {
    $("#currentDay").text(moment().format('LLLL')); 
    }; 
    calendarTime()
    setInterval(calendarTime, 1000);

    // Array of time blocks by hour
    var timeBlocks = ["9 AM" , "10 AM", "11 AM", "12 PM", "1 PM" , "2 PM" , "3 PM" , "4 PM" , "5 PM"];

    // Adding in schedule layout and defining elements
    for (let i = 0; i < timeBlocks.length; i++) {
        var newDiv = $("<div>");
        var timeDiv = $("<div>");
        var scheduleDiv = $("<textarea>");
        var saveEl = $("<button>");
        var iconEl = $("<i>");

        // Adding classes and handles for css elements
        newDiv.attr("id", "time-block", timeBlocks[i]);
        newDiv.attr("class", "row");
        timeDiv.attr("class", "hour col-1");
        scheduleDiv.attr("class", "schedule col-10");
        saveEl.attr("class", "saveBtn col-1");
        iconEl.attr("class", "far fa-save");

        // Displaying to window
        $(".container").append(newDiv);
        newDiv.append(timeDiv);
        newDiv.append(scheduleDiv);
        newDiv.append(saveEl);
        saveEl.append(iconEl);
        timeDiv.text(timeBlocks[i])
    };

    let time = moment();
    function changeRowColor() {
     hour = time.hours();
     $("#schedule").each(function() {
        let currentHour = parseInt($(this).attr("id"));
        if (currentHour > hour) {
            $(this).addClass("future")
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
        });
    } 
    changeRowColor ();
    setInterval(changeRowColor, 1000);
})