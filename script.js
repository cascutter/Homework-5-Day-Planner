$(document).ready(function () {

    // Displays and updates time/date 
    var calendarTime = function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));
    }; 
    calendarTime()
    setInterval(calendarTime, 1000);

    // Array of time blocks by hour
    var timeBlocks = ["9 AM" , "10 AM", "11 AM", "12 PM", "1 PM" , "2 PM" , "3 PM" , "4 PM" , "5 PM"];
    // Time block number array for color change and local storage
    var scheduleArr = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

    // Adding in schedule layout and defining elements
    for (let i = 0; i < timeBlocks.length; i++) {
        var newDiv = $("<div>");
        var timeDiv = $("<div>");
        var scheduleDiv = $("<textarea>");
        var saveEl = $("<button>");
        var iconEl = $("<i>");
        var clearEl = $("<button>");
        var clearIconEl = $("<i>");

        // Adding classes and handles for css elements
        newDiv.attr("id", "time-block", timeBlocks[i]);
        newDiv.attr("class", "row", "id");
        timeDiv.attr("class", "hour col-1");
        scheduleDiv.attr("class", "schedule col-8");
        scheduleDiv.attr("id", scheduleArr[i]);
        saveEl.attr("class", "saveBtn col-1");
        iconEl.attr("class", "far fa-save");
        clearEl.attr("class", "clearBtn col-1");
        clearIconEl.attr("class", "far fa-trash-alt");

        // Displaying to window
        $(".container").append(newDiv);
        newDiv.append(timeDiv);
        newDiv.append(scheduleDiv);
        newDiv.append(saveEl);
        saveEl.append(iconEl);
        newDiv.append(clearEl);
        clearEl.append(clearIconEl);
        timeDiv.text(timeBlocks[i])
    };
    
    //Change row color based on time
    var currentTime = moment().hour();
    $("textarea").each(function() {
        var hours = $(this).attr("id");
        if (hours == currentTime ) {
            $(this).addClass("present");
        } else if (hours > currentTime ) {
            $(this).addClass("future");
        } else {
            $(this).addClass("past");
        }
    });

    //Save to local storage
    $(function() {
        loadData();
            function loadData () {
            //Storage for each time slot
             $("#9").val(localStorage.getItem("9"));
             $("#10").val(localStorage.getItem("10"));
             $("#11").val(localStorage.getItem("11"));
             $("#12").val(localStorage.getItem("12"));
             $("#13").val(localStorage.getItem("13"));
             $("#14").val(localStorage.getItem("14"));
             $("#15").val(localStorage.getItem("15"));
             $("#16").val(localStorage.getItem("16"));
             $("#17").val(localStorage.getItem("17"));
            }
        // Add event listener on save button
        $(".saveBtn").click(function() {
            //Save data to local storage
            var scheduleData = $(this).siblings("textarea").val();
            var timeSlot = $(this).siblings("textarea").attr("id");
            localStorage.setItem(timeSlot, scheduleData);
        })   
        $(".clearBtn").click(function() {
            //Save data to local storage
            var scheduleData = $(this).siblings("textarea").val("");
            var timeSlot = $(this).siblings("textarea").attr("id");
            localStorage.removeItem(timeSlot, scheduleData);
        })
    })
})

