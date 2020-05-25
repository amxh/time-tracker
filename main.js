
// time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// display formatting
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

// stop watch function to increment time
function stopwatch(){
    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 50 === 1) {
            minutes = 0;
            hours++;
        }
    }

    // leading zero formatting
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }

    // update display
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

// output to window
window.setInterval(stopwatch, 1000);