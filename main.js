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
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    display.textContent = choices[Math.floor(Math.random() * choices.length)];
  }, 200);

  setTimeout(function () {
    clearInterval(intervalId);
    document.body.style.backgroundColor = "#f4f4f4";
  }, 5000);
}
