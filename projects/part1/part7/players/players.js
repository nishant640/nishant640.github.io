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

  function closeIt() {
    box.classList.remove("show");
    imgBox.src = "";
    imgBox.alt = "Player image";
  }

  if (x) {
    x.addEventListener("click", closeIt);
  }

  if (box) {
    box.addEventListener("click", function (e) {
      if (e.target === box) {
        closeIt();
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeIt();
    }
  });

  function makeCard(player) {
    return `
      <a class="rm-card" href="#" aria-label="${player.name}">
        <div class="rm-media">
          <img src="${player.img_name}" alt="${player.name}">
          <div class="rm-overlay">
            <div class="rm-num">${player.number}</div>
            <div class="rm-meta">
              <div class="rm-name">${player.name}</div>
              <div class="rm-role">${player.position}</div>
            </div>
          </div>
        </div>
      </a>
    `;
  }

  function addLightboxClicks() {
    var players = document.querySelectorAll(".rm-card:not(.rm-all)");

    players.forEach(function (p) {
      p.addEventListener("click", function (e) {
        e.preventDefault();

        var pic = p.querySelector("img");
        if (!pic || !imgBox || !cap || !box) return;

        imgBox.src = pic.src;
        imgBox.alt = pic.alt;

        var name = p.getAttribute("aria-label") || pic.alt || "";
        cap.textContent = name;

        box.classList.add("show");
      });
    });
  }

  async function loadPlayers() {
    var holder = document.getElementById("playersData");
    if (!holder) return;

    var url = "https://raw.githubusercontent.com/nishant640/nishant640.github.io/main/projects/part1/part7/json/players.json";

    try {
      var response = await fetch(url);
      var data = await response.json();

      var goalkeepers = data.filter(function (p) {
        return p.position === "Goalkeeper";
      });

      var defenders = data.filter(function (p) {
        return p.position === "Defender";
      });

      var midfielders = data.filter(function (p) {
        return p.position === "Midfielder";
      });

      var forwards = data.filter(function (p) {
        return p.position === "Forward";
      });

      holder.innerHTML = `
        <section class="group">
          <h2>Goalkeeper</h2>
          <div class="players-grid">
            ${goalkeepers.map(makeCard).join("")}
          </div>
        </section>

        <section class="group">
          <h2>Defender</h2>
          <div class="players-grid">
            ${defenders.map(makeCard).join("")}
          </div>
        </section>

        <section class="group">
          <h2>Midfielder</h2>
          <div class="players-grid">
            ${midfielders.map(makeCard).join("")}
          </div>
        </section>

        <section class="group">
          <h2>Forward</h2>
          <div class="players-grid">
            ${forwards.map(makeCard).join("")}
            <a class="rm-card rm-all" href="https://www.realmadrid.com/en-US/football/first-team/players" target="_blank" rel="noopener noreferrer">
              <div class="rm-media rm-all-media">
                <div class="rm-all-inner">
                  <div class="rm-all-arrow">→</div>
                  <div class="rm-all-text">All Players</div>
                </div>
              </div>
            </a>
          </div>
        </section>
      `;

      addLightboxClicks();
    } catch (error) {
      holder.innerHTML = "<p>Could not load players right now.</p>";
      console.log(error);
    }
  }

  loadPlayers();
})();