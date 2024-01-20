// Display the current date and time in <#currentDay> <p> tag using day.js
var rightNow = dayjs().format('dddd, MMMM D');
$('#currentDay').text(rightNow);
// Present time blocks for from (06:00 - 22:00) with standard business hours (09:00 - 17:00)
var timeBlocks = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
'14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];
// Loop through time blocks
// Create time blocks for each hour of the day and build out the time block rows with bootstrap grid system
// and add them to index.html using jQuery in the div with class="container"
// Display time block rows in order of time
for (var i = 0; i < timeBlocks.length; i++) {
    var timeBlock = timeBlocks[i];
    var timeBlockRow = $('<div class="row" style =>');
    var timeBlockHour = $('<div class="col-1 hour">').text(timeBlock);
    var timeBlockText = $('<textarea class="col-10 description">');
    var timeBlockSaveBtn = $('<button class="col-1 saveBtn"><i class="fas fa-save fa-lg"></i></button>'); // Font Awesome icon
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
var clearBtn = $('<button class="clearBtn" style="margin-top: 25px" >Clear Schedule</button>');
var clearBtnContainer = $('<div class="clearBtnContainer"></div>');
clearBtnContainer.append(clearBtn);
$('.container').append(clearBtnContainer);
clearBtn.on('click', function () {
    localStorage.clear();
    $('.description').val('');
});



