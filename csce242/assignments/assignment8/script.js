const range = document.getElementById("range");
const minutesText = document.getElementById("minutes");
const message1 = document.getElementById("message1");

function updateMessage(value) {
  minutesText.textContent = value;

  if (value > 45) {
    message1.textContent = "Relax, You got More than 45 minutes.";
  }
  else if (value > 30) {
    message1.textContent = "Between 30 and 45 minutes.";
  }
  else if (value > 15) {
    message1.textContent = "Between 15 and 30 minutes.";
  }
  else {
    message1.textContent = "Too late, BETTER SKIP.";
  }
}

range.addEventListener("input", function() {
  updateMessage(range.value);
});

updateMessage(range.value);


const ex1 = document.getElementById("ex1");
const ex2 = document.getElementById("ex2");

document.getElementById("ex1Btn").addEventListener("click", function(e) {
  e.preventDefault();
  ex1.classList.remove("hidden");
  ex2.classList.add("hidden");
});

document.getElementById("ex2Btn").addEventListener("click", function(e) {
  e.preventDefault();
  ex1.classList.add("hidden");
  ex2.classList.remove("hidden");
});


const timeText = document.getElementById("time");
const message2 = document.getElementById("message2");
const refreshBtn = document.getElementById("refresh");

function updateCountdown() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();

  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  if (hours === 0) {
    hours = 12;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  timeText.textContent = hours + ":" + minutes + " " + ampm;

  const classTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    8,
    30,
    0
  );

  let diff = Math.round((classTime - now) / 60000);

  if (diff > 15) {
    message2.textContent = diff + " minutes until class.";
  }
  else if (diff >= 10) {
    message2.textContent = diff + " minutes until class.";
  }
  else if (diff >= 5) {
    message2.textContent = diff + " minutes until class.";
  }
  else if (diff >= 0) {
    message2.textContent = diff + " minutes until class.";
  }
  else if (diff >= -5) {
    message2.textContent = "Class started up to 5 minutes ago.";
  }
  else if (diff >= -15) {
    message2.textContent = "Class started up to 15 minutes ago.";
  }
  else {
    message2.textContent = "Class started more than 15 minutes ago.";
  }
}

refreshBtn.addEventListener("click", updateCountdown);

updateCountdown();

const menuToggle = document.getElementById("menuToggle");
const menuList = document.getElementById("menuList");

menuToggle.addEventListener("click", function() {

  menuList.classList.toggle("show");

  if (menuList.classList.contains("show")) {
    menuToggle.textContent = "▲";
  } else {
    menuToggle.textContent = "▼";
  }

});
