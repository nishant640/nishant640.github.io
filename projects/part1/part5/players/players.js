(function () {
  var btn = document.querySelector(".nav-toggle");
  var menu = document.getElementById("mainNav");

  if (btn && menu) {
    btn.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  var box = document.getElementById("pbox");
  var imgBox = document.getElementById("pboxImg");
  var cap = document.getElementById("pboxCap");
  var x = document.getElementById("pboxX");

  if (!box || !imgBox || !cap || !x) return;

  var players = document.querySelectorAll(".rm-card:not(.rm-all)");

  players.forEach(function (p) {
    p.addEventListener("click", function (e) {
      e.preventDefault();

      var pic = p.querySelector("img");
      if (!pic) return;

      imgBox.src = pic.src;

      var name = p.getAttribute("aria-label") || pic.alt || "";
      cap.textContent = name;

      box.classList.add("show");
    });
  });

  function closeIt() {
    box.classList.remove("show");
    imgBox.src = "";
    imgBox.alt = "Player image";
  }

  x.addEventListener("click", closeIt);

  box.addEventListener("click", function (e) {
    if (e.target === box) {
      closeIt();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeIt();
    }
  });
})();