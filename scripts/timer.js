var countDownDate = new Date("Feb 24, 2023 21:37:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.getElementById("timer_hour").innerHTML = hours + "h";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "oferta zakończona";
  }
}, 1000);

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("timer_minutes").innerHTML = minutes + "m";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "oferta zakończona";
  }
}, 1000);

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer_seconds").innerHTML = seconds + "s";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "oferta zakończona";
  }
}, 1000);