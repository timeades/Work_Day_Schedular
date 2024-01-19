// Display the current date and time in <#currentDay> <p> tag using day.js
var rightNow = dayjs().format('dddd, MMMM D, YYYY h:mm:ss a');
    $('#currentDay').text(rightNow);
// Present time blocks for standard business hours (9am - 5pm)

// Color code time blocks to indicate whether it is in the past, present, or future

// Allow user to enter and save events for each time block

// Save events to local storage

// Display saved events after page refresh