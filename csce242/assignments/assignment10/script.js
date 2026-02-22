const moodSelect = document.getElementById("moodSelect");
const songLinks = document.getElementById("songLinks");
const videoBox = document.getElementById("videoBox");

const happy = {
  "Enchanted Waterfall by Tory Lanez": "https://youtu.be/_JvqifLxK4U?si=RWAysKNMEUZEA4B3",
  "Rather Lie by Playboi Carti": "https://youtu.be/fYD7YsSRHOY?si=VzLnrDHz2vypKoZk",
  "Forever by Chris Brown": "https://youtu.be/5sMKX22BHeE?si=cF_oGOyPCVfONwa4",
  "Texas Tea by Post Malone": "https://youtu.be/uU0S3H4Z2cI?si=vkez5LT7y2b1dfmo",
  "I Feel It Coming by The Weeknd": "https://youtu.be/iIWoYaJRryw?si=DE-7GtPaWFk0ypxH"
};

const sad = {
  "The Night We Met by Lord Huron": "https://youtu.be/KtlgYxa6BMU?si=rb_qT1N9rRq1yWkR",
  "Not you too by Drake ft. Chris Brown": "https://youtu.be/ZX_mvoY_Hg0?si=vJ7U6ZOKPSdAFBLz",
  "Die for you by Joji": "https://youtu.be/kIEWJ1ljEro?si=qofrEfVsrodGm_AM",
  "Cry For Me by The Weeknd": "https://youtu.be/ljxYE-aJD3A?si=gfRocaMBqsZJlMDC",
  "Die Trying by PARTYNEXTDOOR, Drake, Yebba": "https://youtu.be/b5bR2NqDpqI?si=Mxw9NjFkokoXsuKj"
};

const toEmbed = (url) => {
  const clean = url.split("?")[0].split("&")[0];

  if (clean.includes("youtu.be/")) {
    const id = clean.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${id}`;
  }

  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  return url;
};

moodSelect.addEventListener("change", () => {
  songLinks.innerHTML = "";
  videoBox.innerHTML = "";

  const mood = moodSelect.value;
  if (mood === "") return;

  const songs = mood === "happy" ? happy : sad;

  for (const title in songs) {
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = title;

    a.addEventListener("click", (e) => {
      e.preventDefault();

      const embed = toEmbed(songs[title]);

      videoBox.innerHTML = `
        <iframe
          src="${embed}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      `;
    });

    songLinks.appendChild(a);
  }
});