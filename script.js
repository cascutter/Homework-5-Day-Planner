$(document).ready(function () {

    // Displays and updates time/date 
    var calendarTime = function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));
    }; 
    calendarTime()
    setInterval(calendarTime, 1000);

    // Array of time blocks by hour
    var timeBlocks = ["9 AM" , "10 AM", "11 AM", "12 PM", "1 PM" , "2 PM" , "3 PM" , "4 PM" , "5 PM"];
    var scheduleArr = ["schedule9", "schedule10", "schedule11", "schedule12", "schedule13", "schedule14", "schedule15", "schedule16", "schedule17"];

    // Adding in schedule layout and defining elements
    for (let i = 0; i < timeBlocks.length && i < scheduleArr.length; i++) {
        var newDiv = $("<div>");
        var timeDiv = $("<div>");
        var scheduleDiv = $("<textarea>");
        var saveEl = $("<button>");
        var iconEl = $("<i>");

        // Adding classes and handles for css elements
        newDiv.attr("id", "time-block", timeBlocks[i]);
        newDiv.attr("class", "row", "id");
        timeDiv.attr("class", "hour col-1");
        scheduleDiv.attr("class", "schedule col-10", scheduleArr[i]);
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
    
    //let time = calendarTime();

    var currentTime = moment().hour();
    var hours = scheduleArr;
    $(".schedule").each(function() {
        //var hours = $("#currentDay").attr("textarea")
        if (hours === currentTime ) {
            $(this).css("background-color", "red");
        } else if (hours > currentTime ) {
            $(this).css("background-color", "green");
        } else {
            $(this).css("background-color", "grey");
        }
    });

    $(function() {
        loadData();
        function loadData () {
            $("#textarea").html(localStorage.mydata);
        }
        // Add event listener on saved button
        $(".saveBtn").click(function() {
            //Save data to local storage
            var scheduleData = $("textarea").val();
            localStorage.setItem("Scheduled event:", JSON.stringify(scheduleData));
            localStorage.mydata = scheduleData;
        })
        
    })

    });

    // hour = time.hour();
    //  $("textarea").each(function() {
    //     let currentHour = parseInt($(timeBlocks).attr("class"));
    //     if (calendarTime > hour) {
    //         $(this).addClass("future");
    //     } else if (currentHour === hour) {
    //         $(this).addClass("textarea");
    //     } else {
    //         $(this).addClass("past");
    //     }
    //     });
        
    // };} 
    // changeRowColor ();
    // setInterval(changeRowColor, 1000);

    // let time = moment();
    // function changeRowColor() {
    //  hour = time.hours();
    //  $("#schedule").each(function() {
    //     let currentHour = parseInt($(this).attr("id"));
    //     if (currentHour > hour) {
    //         $(this).addClass("future")
    //     } else if (currentHour === hour) {
    //         $(this).addClass("present");
    //     } else {
    //         $(this).addClass("past");
    //     }
    //     });
