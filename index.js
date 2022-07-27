
let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");


let countDown = () => {
  let futureDate = new Date("8 aug 2022");
  let currentDate = new Date();
  let myDate = futureDate - currentDate;
  //console.log(myDate);

  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);

  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;

  let min = Math.floor(myDate / 1000 / 60) % 60;

  let sec = Math.floor(myDate / 1000) % 60;

  daysItem.innerHTML = days;
  hoursItem.innerHTML = hours;
  minItem.innerHTML = min;
  secItem.innerHTML = sec;
}

countDown()

setInterval(countDown, 1000)

// NAV BAR SCROLLING 


    window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     
     document.getElementById("navbar").style.background = "#1d1b1c"
     document.getElementById("navbar").style.transition = "1s"
   } else {
    
     document.getElementById("navbar").style.background = "none";
     document.getElementById("navbar").style.transition = "1s"
   
   }
 }

//  toggling color on button (for phones)
 const btn = document.getElementById('btn');
 const nav = document.getElementById('navbar')

 btn.addEventListener('click', function onClick(event) {
   const backgroundColor = nav.style.backgroundColor;
 
   if (backgroundColor === '') {
     nav.style.backgroundColor = '#1d1b1c;';
 
   } else {
     nav.style.backgroundColor = '';

   }
 });

 
