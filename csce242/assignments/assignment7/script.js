document.getElementById("btn-geometry").onclick = () => {
  const triangle = document.getElementById("triangle");
  const btn = document.getElementById("btn-geometry");

  if (triangle.classList.contains("show")) {
    triangle.classList.remove("show");
    triangle.setAttribute("aria-hidden", "true");
    btn.textContent = "Show Triangle";
  } else {
    triangle.classList.add("show");
    triangle.setAttribute("aria-hidden", "false");
    btn.textContent = "Hide Triangle";
  }
};

const dateInput = document.getElementById("dateInput");
const dateText = document.getElementById("dateText");
const dateValue = document.getElementById("dateValue");

dateInput.onchange = () => {
  if (!dateInput.value) {
    dateText.style.display = "none";
    return;
  }
  const parts = dateInput.value.split("-");
  dateValue.textContent = parts[1] + "/" + parts[2] + "/" + parts[0];
  dateText.style.display = "block";
};

const sun = document.getElementById("sunImg");
const imgFrame = document.getElementById("imgFrame");

sun.onclick = () => {
  imgFrame.classList.toggle("rainbow");
};

sun.onkeydown = (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    imgFrame.classList.toggle("rainbow");
  }
};
