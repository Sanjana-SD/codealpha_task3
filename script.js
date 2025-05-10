const audio = document.getElementById("audio");
const title = document.getElementById("title");
const progress = document.getElementById("progress");

let songs = ["sample"];
let songIndex = 0;

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  audio.play();
}

function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  audio.play();
}

audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percent + "%";
});

loadSong(songs[songIndex]);
