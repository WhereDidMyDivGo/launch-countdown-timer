let days = document.querySelector(".days .block p"),
  hours = document.querySelector(".hours .block p"),
  minutes = document.querySelector(".minutes .block p"),
  seconds = document.querySelector(".seconds .block p"),
  input = prompt("Enter days (max 99)");

if (input && !isNaN(input) && input > 0 && input <= 99) {
  let countdown = input * 86400;
  function update() {
    let d = Math.floor(countdown / 86400),
      h = Math.floor((countdown % 86400) / 3600),
      m = Math.floor((countdown % 3600) / 60),
      s = countdown % 60;
    if (d < 10) {
      days.innerText = "0" + d;
    } else {
      days.innerText = d;
    }

    if (h < 10) {
      hours.innerText = "0" + h;
    } else {
      hours.innerText = h;
    }

    if (m < 10) {
      minutes.innerText = "0" + m;
    } else {
      minutes.innerText = m;
    }

    if (s < 10) {
      seconds.innerText = "0" + s;
    } else {
      seconds.innerText = s;
    }

    if ((countdown -= 1) <= 0) clearInterval(timer);
  }
  update();
  let timer = setInterval(update, 1000);
}
