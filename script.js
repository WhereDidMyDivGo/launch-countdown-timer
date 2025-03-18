let input = prompt("Enter days (99 max)");

function validate() {
  if (!input || isNaN(input) || input <= 0 || input > 99) {
    input = prompt("Invalid input. Enter a number between 1 and 99");
    validate();
  } else {
    let countdown = parseInt(input) * 24 * 60 * 60;
    const days = document.querySelector(".days .block p");
    const hours = document.querySelector(".hours .block p");
    const minutes = document.querySelector(".minutes .block p");
    const seconds = document.querySelector(".seconds .block p");

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
  }
}
validate();
