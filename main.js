window.onload(myClock());
function myClock(){

    const today = new Date();
    let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

minute = checkTime(minute);
  // second = checkTime(second);
  let clock = document.getElementById("clock");
//   secondDisplay = document.querySelector(".second");
  clock.innerText = `${hour} : ${minute}`;
  // secondDisplay.innerText = `${second}`;
  setTimeout(myClock, 1000);
  // console.log(second);

}

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }