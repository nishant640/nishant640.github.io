class Song {

  constructor(title, artist, album, year,
              genre, cover, youtube) {

    this.title = title
    this.artist = artist
    this.album = album
    this.year = year
    this.genre = genre
    this.cover = cover
    this.youtube = youtube
  }

  getCard(i) {

    return `
      <div class="card" data-i="${i}">

        <div class="cardTop">
          <h3>${this.title}</h3>
          <p>by ${this.artist}</p>
        </div>

        <img
          class="cover"
          src="${this.cover}"
          alt="${this.title}"
        >

      </div>
    `
  }
}



let songs = [

  new Song(
    "Enchanted Waterfall",
    "Tory Lanez",
    "Alone at Prom",
    2021,
    "R&B",
    "images/tory.png",
    "_JvqifLxK4U"
  ),

  new Song(
    "Thinking About You",
    "Frank Ocean",
    "Channel Orange",
    2012,
    "R&B",
    "images/frank.png",
    "6JHu3b-pbh8"
  ),

  new Song(
    "Rather Lie",
    "Playboi Carti",
    "Whole Lotta Red",
    2025,
    "Rap",
    "images/carti.png",
    "fYD7YsSRHOY"
  ),

  new Song(
    "Afterthought",
    "Joji",
    "Nectar",
    2020,
    "Alternative",
    "images/joji.png",
    "QH9vvwPPBS8"
  )

]



let gallery = document.getElementById("gallery")

let modal = document.getElementById("songModal")
let closeBtn = document.getElementById("closeBtn")

let mTitle = document.getElementById("mTitle")
let mArtist = document.getElementById("mArtist")
let mAlbum = document.getElementById("mAlbum")
let mYear = document.getElementById("mYear")
let mGenre = document.getElementById("mGenre")

let video = document.getElementById("video")



function loadSongs() {

  let out = ""

  for (let i = 0; i < songs.length; i++) {
    out += songs[i].getCard(i)
  }

  gallery.innerHTML = out


  let cards =
    document.querySelectorAll(".card")

  for (let i = 0; i < cards.length; i++) {

    cards[i].onclick = function () {

      let index =
        this.getAttribute("data-i")

      openModal(songs[index])
    }
  }
}



function openModal(song) {

  mTitle.innerHTML = song.title
  mArtist.innerHTML = "by " + song.artist
  mAlbum.innerHTML = song.album
  mYear.innerHTML = song.year
  mGenre.innerHTML = song.genre

  video.src =
    "https://www.youtube-nocookie.com/embed/"
    + song.youtube

  modal.style.display = "block"
}



function closeModal() {

  modal.style.display = "none"
  video.src = ""

}


closeBtn.onclick = closeModal


window.onclick = function (e) {

  if (e.target == modal) {
    closeModal()
  }

}


loadSongs()