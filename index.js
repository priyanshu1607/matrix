
// Set the date we're counting down to
var countDownDate = new Date("July 23, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="Timer"
  if(days==0){
    document.getElementById("Timer").innerHTML = hours + "h "
    + minutes + "m " + seconds + "s "
  }
  else if (days==0 & hours == 0) {
    document.getElementById("Timer").innerHTML = minutes + "m " + seconds + "s "
  } else {
    document.getElementById("Timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";}

    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Timer").innerHTML = "EXPIRED";
  }
}, 1000);
