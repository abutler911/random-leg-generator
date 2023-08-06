var choices = [
  "AUS-IAH",
  "IAH-AUS",
  "AUS-IAH",
  "IAH-AUS",
  "AUS-IAH",
  "IAH-AUS",
  "AUS-IAH",
  "IAH-AUS",
];

function randomChoice() {
  var timerElement = document.getElementById("timer");
  timerElement.textContent = "";

  var display = document.getElementById("display");
  display.classList.remove("choice-display-static");

  var intervalId = setInterval(function () {
    display.textContent = choices[Math.floor(Math.random() * choices.length)];
  }, 10);

  var countdown = 5;
  timerElement.textContent = "Time left: " + countdown + "s";

  var countdownIntervalId = setInterval(function () {
    countdown--;
    timerElement.textContent = "Time left: " + countdown + "s";
  }, 1000);

  setTimeout(function () {
    clearInterval(intervalId);
    clearInterval(countdownIntervalId);
    timerElement.textContent = "";
    document.body.style.backgroundColor = "#f4f4f4";
    display.classList.add("choice-display-static");
  }, countdown * 1000);

  changeBackgroundColor();
}

function changeBackgroundColor() {
  var intervalId = setInterval(function () {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  }, 300);

  setTimeout(function () {
    clearInterval(intervalId);
    document.body.style.backgroundColor = "#f4f4f4";
  }, 5000);
}
