(function () {
  var btn = document.querySelector(".nav-toggle");
  var menu = document.getElementById("mainNav");

  if (btn && menu) {
    btn.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest(".player-card");
    if (!a) return;

    if (a.getAttribute("href") === "#") {
      e.preventDefault();
    }

    var id = a.dataset.player;
    if (id) {
      console.log("player clicked:", id);
    }
  });

  var form = document.getElementById("contactForm");
  var formMessage = document.getElementById("formMessage");

  if (form && formMessage) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      formMessage.textContent = "";
      formMessage.className = "form-message";

      if (!form.checkValidity()) {
        formMessage.textContent = "Please fill out all fields correctly.";
        formMessage.classList.add("error");
        form.reportValidity();
        return;
      }

      var formData = new FormData(form);

      try {
    const response = await fetch("https://formsubmit.co/ajax/nishantmc03@gmail.com", {
        method: "POST",
        headers: {
            Accept: "application/json"
        },
        body: formData
    });

    const result = await response.json();
    console.log("status:", response.status);
    console.log("result:", result);

    if (response.ok) {
        alert("Message sent successfully");
    } else {
        alert("Something went wrong");
    }
} catch (error) {
    console.log("error:", error);
    alert("Error sending message");
}
    });
  }
})();