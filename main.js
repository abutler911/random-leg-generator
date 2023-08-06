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
  var display = document.getElementById("display");

  var intervalId = setInterval(function () {
    display.textContent = choices[Math.floor(Math.random() * choices.length)];
  }, 10);

  setTimeout(function () {
    clearInterval(intervalId);
    display.classList.add("choice-display-static");
  }, 5000);

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
