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
  var x = document.getElementById("pboxX");
  var numBox = document.getElementById("pboxNum");
  var nameBox = document.getElementById("pboxName");
  var posBox = document.getElementById("pboxPos");
  var careerBox = document.getElementById("pboxCareer");

  function closeIt() {
    box.classList.remove("show");
    imgBox.src = "";
    imgBox.alt = "Player image";
    numBox.textContent = "";
    nameBox.textContent = "";
    posBox.textContent = "";
    careerBox.textContent = "";
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

  function getCareerPath(name) {
    if (name === "Courtois") {
      return "Played in Belgium and Spain before becoming Real Madrid's first choice goalkeeper.";
    }
    if (name === "Lunin") {
      return "Came through Ukrainian football and grew into a strong backup option for Madrid.";
    }
    if (name === "Carvajal") {
      return "Came through Real Madrid's academy, played at Leverkusen, then returned and became a club legend.";
    }
    if (name === "Militão") {
      return "Moved from Brazil to Europe and became an important defender for Real Madrid.";
    }
    if (name === "Alaba") {
      return "Built his name at Bayern Munich before joining Madrid as an experienced leader in defense.";
    }
    if (name === "Rüdiger") {
      return "Developed in Germany and England before becoming a key defender at Real Madrid.";
    }
    if (name === "Mendy") {
      return "Worked his way up in France and earned his move to Real Madrid through strong defending.";
    }
    if (name === "Fran García") {
      return "Came through Madrid's system, impressed in Spain, and returned to the club.";
    }
    if (name === "Bellingham") {
      return "Rose at Birmingham and Dortmund before becoming a midfield leader at Real Madrid.";
    }
    if (name === "Valverde") {
      return "Came from Uruguay, developed through Madrid's system, and became one of the team's hardest workers.";
    }
    if (name === "Camavinga") {
      return "Broke through in France at a young age and quickly became an important Madrid midfielder.";
    }
    if (name === "Tchouaméni") {
      return "Impressed in French football and joined Real Madrid as a top young midfielder.";
    }
    if (name === "Modrić") {
      return "Built his career in Croatia and England before becoming one of Madrid's greatest midfielders.";
    }
    if (name === "Arda Güler") {
      return "Rose in Turkey as a top young talent and then joined Real Madrid.";
    }
    if (name === "Vini Jr" || name === "Vinícius Jr." || name === "Vinicius Jr" || name === "Vinicius") {
      return "Came from Flamengo and developed into one of the best wingers in world football.";
    }
    if (name === "Rodrygo") {
      return "Started at Santos and became a key Real Madrid attacker with pace and finishing.";
    }
    if (name === "Mbappé" || name === "Kylian Mbappé") {
      return "Became a world star in France and grew into one of football's most dangerous forwards.";
    }
    if (name === "Endrick") {
      return "Rose quickly in Brazil and joined Real Madrid as one of the game's top young forwards.";
    }

    return "Important player contributing to Real Madrid's success.";
  }

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
        if (!pic || !imgBox || !box) return;

        imgBox.src = pic.src;
        imgBox.alt = pic.alt;

        var name = p.getAttribute("aria-label") || pic.alt || "";
        var num = "";
        var pos = "";

        var numEl = p.querySelector(".rm-num");
        var posEl = p.querySelector(".rm-role");

        if (numEl) {
          num = numEl.textContent;
        }

        if (posEl) {
          pos = posEl.textContent;
        }

        nameBox.textContent = name;
        numBox.textContent = num;
        posBox.textContent = pos;
        careerBox.textContent = getCareerPath(name);

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