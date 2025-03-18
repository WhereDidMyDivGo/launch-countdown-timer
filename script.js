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

    days.innerText = String(d).padStart(2, "0");
    hours.innerText = String(h).padStart(2, "0");
    minutes.innerText = String(m).padStart(2, "0");
    seconds.innerText = String(s).padStart(2, "0");

    if ((countdown -= 1) <= 0) clearInterval(timer);
  }
  update();
  let timer = setInterval(update, 1000);
} else {
  alert("invalid input");
  location.reload();
}
