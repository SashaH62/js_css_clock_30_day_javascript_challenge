const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime() {
  const currentTime = new Date();
  let secondsDegree = 0;
  let minutesDegree = 0;
  const seconds = currentTime.getSeconds();
  secondsDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const minutes = currentTime.getMinutes();
  minutesDegree = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

  const hours = currentTime.getHours();
  let hoursDegree = undefined;
  if (hours > 12) {
    hoursDegree = ((hours - 12) / 12) * 360 + 90;
  } else {
    hoursDegree = (hours / 12) * 360 + 90;
  }

  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
  console.log(secondsDegree);

  if (secondsDegree == 90) {
    secondHand.classList.remove("notransition");
  } else {
    secondHand.classList.add("notransition");
  }
}

setInterval(setTime, 1000);
