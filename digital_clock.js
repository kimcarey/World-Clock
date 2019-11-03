$(document).ready(function() {


  function displayTime(clockElement, hour_offset = 0) {
    var currentTime = new Date();
    currentTime.setHours(currentTime.getHours() + hour_offset);
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();



    // Set the AM and PM meridiem and 12-hour format; Default is AM
    var meridiem = "AM";
    if (hours > 12) {
      hours = hours - 12;
      meridiem = "PM";

    if (hours === 0) {
      hours = 12;
      }
    }

    // If the seconds digit is less than ten
    if (seconds < 10) {
      // Add the "0" digit to the front
      // so 9 becomes "09"
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (hours < 10) {
      hours = "0" + hours;
    }

    // Then we set the text inside the clock div
    // to the hours, minutes, and seconds of the current time
    clockElement.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;

    // This makes our clock 'tick' by repeatedly
    // running the displayTime function every second (1000ms = 1sec).
    var updateTime = function() { displayTime(clockElement, hour_offset)}
    setInterval(updateTime, 1000);

  }

  // This gets a "handle" to the clock div in our HTML
  var clockDiv = document.getElementById('clock');
  displayTime(clockDiv);

  var clockLondonDiv = document.getElementById('clock_london');
  displayTime(clockLondonDiv, 8);

  var clockAustraliaDiv = document.getElementById('clock_australia');
  displayTime(clockAustraliaDiv, 18);

  var clockHongKongDiv = document.getElementById('clock_hongkong');
  displayTime(clockHongKongDiv, 15);
});
