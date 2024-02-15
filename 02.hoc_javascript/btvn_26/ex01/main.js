var progressBar = document.querySelector(".progress-bar");
var progress = document.querySelector(".progress");

var progressDot = document.querySelector("span");

var progressBarWidth = progressBar.clientWidth;

/*
Lưu ý:
- Thanh timer thường sẽ thay đổi theo %
- Sự dụng kỹ thuật gán cờ


- Khi bấm chuột xuống vào chấm trắng 
    + cần lấy được clientX tại vị trí bấm chuột.

- Khi kéo chuột
    + cần lấy được clientX ở vị trí gần nhất 
    (kéo tới đâu lấy vị trí tới đó)
    + tính khoảng cách kéo: clientX mới nhất tới
    clientX ban đầu khi click
*/

var isDrag = false;
var initialClientX = 0;
var initialRate = 0;

progressBar.addEventListener("mousedown", function (e) {
  console.log(e.offsetX, progressBarWidth);
  // tính tỷ lệ % giữa vị trí click với chiều rộng

  var rate = (e.offsetX * 100) / progressBarWidth;

  //   update CSS vào progress
  progress.style.width = `${rate}%`;
  initialRate = rate;
  console.log(initialRate);
});

progressDot.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  isDrag = true;
  initialClientX = e.clientX;
  console.log(initialClientX);
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var space = e.clientX - initialClientX;
    rate = (space * 100) / progressBarWidth + initialRate;
    progress.style.width = `${rate}%`;
  }
});

document.addEventListener("mouseup", function () {
  isDrag = false;
});

/**
 * Case 1: Khi ấn vào nút trắng tới một khoảng và bắt đầu kéo
 * -> thanh progress bar bị kéo lại từ đầu
 *
 */
var audio = document.querySelector(".audio");
var currentTimeEl = progressBar.previousElementSibling;
var durationTimeEl = progressBar.nextElementSibling;
console.log(audio.duration);

var playBtn = addEventListener("click", function () {
  audio.play();
  console.log(audio.paused);
});

var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = seconds - mins * 60;
  return `${mins}:${seconds}`;
};

audio.addEventListener("loadeddata", function () {
  durationTimeEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseIcon;
  } else {
    audio.pause();
    this.innerHTML = playIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  // sự kiện time update có sẵn của audio
  console.log("đang chạy", this.currentTime);
  currentTimeEl.innerText = getTime(this.currentTime);

  var rate = (this.currentTimeEl / this.duration) * 100;
  progress.style.width = `${rate}%`;
});
