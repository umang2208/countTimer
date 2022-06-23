var minutes = 00;
var seconds = 00;
var appendseconds = document.getElementById("seconds");
var appendminutes = document.getElementById("minutes");
var buttonStart = document.getElementById("button-start");
var btnReset = document.getElementById("screen2");
var btnResetUp = document.getElementById("screen1");
var Interval;


buttonStart.addEventListener("click", timerFunction);
btnReset.addEventListener("click", resetFunction);
btnResetUp.addEventListener("click", resetFunction);

function timerFunction() {
  // clearInterval(Interval);
  Interval = setInterval(startTimer, 1000);
  buttonStart.removeEventListener("click", timerFunction);
  buttonStart.addEventListener("click", stop);
}
// Reset timer
function resetFunction() {
  clearInterval(Interval);
  seconds = 00;
  minutes = 00;
  appendminutes.innerHTML = "00";
  appendseconds.innerHTML = "00";
}
// start timer
function startTimer() {
  seconds++;
  if (seconds <= 9) {
    appendseconds.innerHTML = "0" + seconds;
  }
  if (seconds > 9) {
    appendseconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    console.log("minutes");
    minutes++;
    appendminutes.innerHTML = "0" + minutes;
    seconds = 0;
    appendseconds.innerHTML = "0" + 0;
  }
  if (minutes > 9) {
    appendminutes.innerHTML = minutes;
  }
}

// function for stop the timer
function stop() {
  clearInterval(Interval);
  buttonStart.removeEventListener("click", stop);

  buttonStart.addEventListener("click", timerFunction);
}
document.getElementById("change2").style.visibility = "hidden";
document.getElementById("screen2").addEventListener("click", displayDown);
function displayDown() {
  document.getElementById("change1").style.visibility = "hidden";
  document.getElementById("pagestyle").setAttribute("href", "css/3-2.css");
  document.getElementById("change2").style.visibility = "visible";
}

document.getElementById("screen1").addEventListener("click", displayUP);

function displayUP() {
  document.getElementById("change1").style.visibility = "visible";
  document.getElementById("change2").style.visibility = "hidden";
  resetFunction();
  document.getElementById("pagestyle").setAttribute("href", "css/style.css");
  
}

// ****************************************************************************************//
 var value1 = document.getElementsByClassName("num1");
 
//  console.log(value1);
 for( let i = 0;i<value1.length;i++) {
    value1[i].addEventListener("click", getValue);
 }
 function getValue(e){
    let timinig = document.getElementsByClassName("num1")
    appendseconds.innerHTML = e.currentTarget.innerHTML;

 }
//             value1.addEventListener("click", (e)=>{
// });