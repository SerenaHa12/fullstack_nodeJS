var currentMusic = 0;

var music = document.querySelector("#audio");
var seekBar = document.querySelector(".seek-bar");
var songName = document.querySelector(".music-name");
var artistName = document.querySelector(".artist-name");
var disk = document.querySelector(".disk");
var currentTime = document.querySelector(".current-time");
var songDuaration = document.querySelector(".song-duaration");
var playBtn = document.querySelector(".play-btn");
var tooltip = document.querySelector(".tooltip");

/**
 * case: Khi dừng nhạc, sau đó play lại 
 * vẫn phải chạy tiếp từ vị trí dừng
 */
playBtn.addEventListener("click", () => {
  if (playBtn.className.includes("pause")) {
    music.play();
  } else {
    music.pause();
  }
  playBtn.classList.toggle("pause");
  disk.classList.toggle("play");
});

/**
 * case: Khi chạy hết nhạc => Reset mọi thứ về 0 => 
 * Có nghĩa khi bấm vào nút play sẽ chạy lại từ đầu
 */
music.addEventListener("ended", () => {
  playBtn.classList.toggle("pause");
  // reset time
  currentTime.innerHTML = "00:00";
});

var setMusic = (i) => {
  seekBar.value = 0;
  var song = songs[i];
  currentMusic = i;
  music.src = song.path;
  // console.log(song);

  songName.innerHTML = song.name;
  artistName.innerHTML = song.artist;
  disk.computedStyleMap.backgroundImage = `url('${song.cover}')`;

  currentTime.innerHTML = "00:00";
  music.addEventListener("loadedmetadata", () => {
    seekBar.max = music.duration;
    songDuaration.innerHTML = formatTime(music.duration);
  });
  console.log(songDuaration);
  console.log(music.duration);
};
setMusic(0);

var formatTime = (time) => {
  var min = Math.floor(time / 60);
  if (min < 10) {
    min = `0${min}`;
  }
  var sec = Math.floor(time % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min} : ${sec}`;
};

setInterval(() => {
  seekBar.value = music.currentTime;
  currentTime.innerHTML = formatTime(music.currentTime);
}, 500);

seekBar.addEventListener("input", () => {
  music.currentTime = seekBar.value;
});

/**
 * case: Khi hover vào timer => 
 * Hiển thị thời gian xem trước
 */
function updateTooltip(event) {
  const mouseX = event.clientX - seekBar.getBoundingClientRect().left;
  const percentage = mouseX / seekBar.offsetWidth;
  const previewTime = percentage * music.duration;
  tooltip.textContent = formatTime(previewTime);
  tooltip.style.display = "block";
  tooltip.style.left = mouseX + "px";
}
// hover seekbar
seekBar.addEventListener("mousemove", updateTooltip);
seekBar.addEventListener("mouseleave", () => {
  tooltip.style.display = "none";
});
