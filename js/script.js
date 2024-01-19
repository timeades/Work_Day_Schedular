// Display the current date and time in <#currentDay> <p> tag using day.js
var rightNow = dayjs().format('dddd, MMMM D, YYYY h:mm:ss a');
$('#currentDay').text(rightNow);
// Present time blocks for from (6am - 10pm) with standard business hours (9am - 5pm)
var timeBlocks = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
'2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'];
// Loop through time blocks
// Create time blocks for each hour of the day and build out the time block rows with bootstrap grid system
// and add them to index.html using jQuery in the div with class="container"
// Display time block rows in order of time
for (var i = 0; i < timeBlocks.length; i++) {
    var timeBlock = timeBlocks[i];
    var timeBlockRow = $('<div class="row" style =>');
    var timeBlockHour = $('<div class="col-1 hour">').text(timeBlock);
    var timeBlockText = $('<textarea class="col-10 description">');
    var timeBlockSaveBtn = $('<button class="col-1 saveBtn">'); // add save image from fontawesome to the button
    timeBlockRow.append(timeBlockHour, timeBlockText, timeBlockSaveBtn);
    $('.container').append(timeBlockRow);
    timeBlockSaveBtn.on('click', function () {
        var timeBlockText = $(this).siblings('.description').val();
        var timeBlockHour = $(this).siblings('.hour').text();
        // Save button should save the event to local storage
        localStorage.setItem(timeBlockHour, timeBlockText);
    });
};
// Color code time blocks to indicate whether it is in the past, present, or future
// Past = gray
// Present = red
// Future = green
function colorCodeTimeBlocks() {
    var currentHour = dayjs().hour();
    $('.hour').each(function () {
        var hour = parseInt($(this).text());
        if (hour < currentHour) {
            $(this).siblings('.description').addClass('past');
        } else if (hour === currentHour) {
            $(this).siblings('.description').addClass('present');
        } else {
            $(this).siblings('.description').addClass('future');
        }
    });
}
colorCodeTimeBlocks();

// Display the items from local storage on the page when the page is refreshed
function displayItemsFromLocalStorage() {
    $('.hour').each(function () {
        var timeBlockHour = $(this).text();
        var timeBlockText = localStorage.getItem(timeBlockHour);
        $(this).siblings('.description').val(timeBlockText);
    });
}
displayItemsFromLocalStorage();

// Add a Clear button at the bottom of the schedule that clears all events from the calendar when the clear button is clicked
var clearBtn = $('<button class="clearBtn" style="margin-top: 25px" >Clear Schedual</button>');
$('.container').append(clearBtn);
clearBtn.on('click', function () {
    localStorage.clear();
    $('.description').val('');
});



