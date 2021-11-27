function slide() {
	document.getElementsByClassName("curtainContainer")[0].style.transform =
		"translatex(-150vw) ";
	document.getElementsByClassName("curtainContainer")[1].style.transform =
		"translatex(150vw)";
}

$(".curtainBody").click(function(){
  slide();
  $(".overlay").css('opacity','0')
})

// Set the date we're counting down to
var countDownDate = new Date("Dec 14, 2021 23:59:59").getTime();

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
    
  // Output the result in an element with id="demo"
  document.querySelector("#Day").innerHTML = days  ;
  document.querySelector("#Hour").innerHTML =hours ;
  document.querySelector("#minute").innerHTML =minutes ;
  document.querySelector("#second").innerHTML =seconds ;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);