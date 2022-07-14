function time() {
  const currentTime = new Date();
  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");
  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours();
  secondHand.style.transform = `rotate(${seconds * 6 + 90}deg)`;
  minuteHand.style.transform = `rotate(${minutes * 6 + 90}deg)`;
  hourHand.style.transform = `rotate(${hours * 30 + 90}deg)`;
  console.log(currentTime);
}

setInterval(time, 1000);
