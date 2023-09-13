var progressBar = document.querySelector(".progress-bar");

var progress = progressBar.querySelector(".progress");

var progressDot = progress.querySelector("span");

var progressBarWidth = progressBar.clientWidth;

var isDrag = false;
var initialClientX = 0;
var initalRate = 0;
var rate = 0;

progressBar.addEventListener("mousedown", function (e) {
  //   console.log(e.offsetX, progressBarWidth);
  //Tính tỷ lệ phần trăm giữa vị trí click với chiều rộng
  rate = (e.offsetX * 100) / progressBarWidth;

  //Update CSS vào progress
  progress.style.width = `${rate}%`;

  initalRate = rate;

  isDrag = true;

  initialClientX = e.clientX;

  //   console.log("progress bar");

  handleChange(rate);
});

progressDot.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  isDrag = true;
  initialClientX = e.clientX;
  //   console.log(initalRate);
  //   console.log("progress dot");
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var space = e.clientX - initialClientX;
    // console.log(space);
    rate = (space * 100) / progressBarWidth + initalRate;
    if (rate < 0) {
      rate = 0;
    }

    if (rate > 100) {
      rate = 100;
    }

    progress.style.width = `${rate}%`;
    handleChange(rate);
  }
});

document.addEventListener("mouseup", function () {
  isDrag = false;
  initalRate = rate;

  audio.currentTime = currentTime;
});

/*
Khi bấm chuột xuống vào chấm màu tím
- Lấy được clientX tại ví trí bấm chuột

Khi kéo chuột
- Lấy được clientX ở vị trí gần nhất (kéo đến đâu lấy vị trí ở đó)
- Tính khoảng cách kéo: clientX mới nhất - clientX ban đầu khi click
*/

var audio = document.querySelector(".audio");
var currentTimeEl = progressBar.previousElementSibling;
var durationTimeEl = progressBar.nextElementSibling;
var playBtn = document.querySelector(".play-btn");

var playIcon = `<i class="fa-solid fa-play"></i>`;
var pauseIcon = `<i class="fa-solid fa-pause"></i>`;

var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

audio.addEventListener("loadeddata", function () {
  //   console.log(audio.duration);
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
  //   console.log("đang chạy: ", this.currentTime);
  if (!isDrag) {
    currentTimeEl.innerText = getTime(this.currentTime);

    //Tính tỷ lệ phần trăm
    rate = (this.currentTime / this.duration) * 100;

    //Update vào timer
    progress.style.width = `${rate}%`;

    currentTime = this.currentTime;

    handleKaraoke(currentTime);
  }
});

audio.addEventListener("ended", function () {
  rate = 0;
  currentTime = 0;
  audio.currentTime = 0;
  progress.style.width = 0;
  playBtn.innerHTML = playIcon;
});

var currentTime = 0;
var handleChange = function (value) {
  currentTime = (value / 100) * audio.duration;

  currentTimeEl.innerText = getTime(currentTime);

  if (!isDrag) {
    audio.currentTime = currentTime;
  }
};

var lyric = `{
  "err": 0,
  "msg": "Success",
  "data": {
    "sentences": [
      {
        "words": [
          {
            "startTime": 30809,
            "endTime": 30889,
            "data": "Bình"
          },
          {
            "startTime": 30889,
            "endTime": 30919,
            "data": "minh"
          },
          {
            "startTime": 31799,
            "endTime": 32019,
            "data": "ơi"
          },
          {
            "startTime": 32029,
            "endTime": 32299,
            "data": "dậy"
          },
          {
            "startTime": 32309,
            "endTime": 32599,
            "data": "chưa"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 33370,
            "endTime": 33779,
            "data": "Café"
          },
          {
            "startTime": 33860,
            "endTime": 34309,
            "data": "sáng"
          },
          {
            "startTime": 35079,
            "endTime": 35319,
            "data": "với"
          },
          {
            "startTime": 35319,
            "endTime": 35749,
            "data": "tôi"
          },
          {
            "startTime": 35759,
            "endTime": 35999,
            "data": "được"
          },
          {
            "startTime": 36209,
            "endTime": 36609,
            "data": "không"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 37649,
            "endTime": 38080,
            "data": "Chơi"
          },
          {
            "startTime": 38090,
            "endTime": 38480,
            "data": "vơi"
          },
          {
            "startTime": 38480,
            "endTime": 38840,
            "data": "qua"
          },
          {
            "startTime": 38850,
            "endTime": 39240,
            "data": "ngày"
          },
          {
            "startTime": 39240,
            "endTime": 39380,
            "data": "đông"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 40100,
            "endTime": 40470,
            "data": "Sao"
          },
          {
            "startTime": 40480,
            "endTime": 40950,
            "data": "thấy"
          },
          {
            "startTime": 40980,
            "endTime": 41539,
            "data": "cô"
          },
          {
            "startTime": 41539,
            "endTime": 41979,
            "data": "đơn"
          },
          {
            "startTime": 42019,
            "endTime": 42209,
            "data": "và"
          },
          {
            "startTime": 42209,
            "endTime": 42479,
            "data": "lạc"
          },
          {
            "startTime": 42629,
            "endTime": 42939,
            "data": "lõng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 44519,
            "endTime": 44999,
            "data": "Đêm"
          },
          {
            "startTime": 44999,
            "endTime": 45439,
            "data": "ơi"
          },
          {
            "startTime": 45439,
            "endTime": 45669,
            "data": "đã"
          },
          {
            "startTime": 45669,
            "endTime": 45689,
            "data": "ngủ"
          },
          {
            "startTime": 45959,
            "endTime": 46169,
            "data": "chưa"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 47089,
            "endTime": 47379,
            "data": "Ngồi"
          },
          {
            "startTime": 47379,
            "endTime": 47689,
            "data": "đây"
          },
          {
            "startTime": 47719,
            "endTime": 48089,
            "data": "uống"
          },
          {
            "startTime": 48599,
            "endTime": 49039,
            "data": "với"
          },
          {
            "startTime": 49039,
            "endTime": 49449,
            "data": "tôi"
          },
          {
            "startTime": 49449,
            "endTime": 49909,
            "data": "vài"
          },
          {
            "startTime": 49909,
            "endTime": 50079,
            "data": "ly"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 51369,
            "endTime": 51980,
            "data": "Say"
          },
          {
            "startTime": 51980,
            "endTime": 52240,
            "data": "thì"
          },
          {
            "startTime": 52629,
            "endTime": 53009,
            "data": "cứ"
          },
          {
            "startTime": 53009,
            "endTime": 53230,
            "data": "say,"
          },
          {
            "startTime": 53990,
            "endTime": 54410,
            "data": "yêu"
          },
          {
            "startTime": 54499,
            "endTime": 54819,
            "data": "thì"
          },
          {
            "startTime": 54819,
            "endTime": 55230,
            "data": "bỏ"
          },
          {
            "startTime": 56720,
            "endTime": 56780,
            "data": "đi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 57859,
            "endTime": 57889,
            "data": "Đôi"
          },
          {
            "startTime": 58669,
            "endTime": 58799,
            "data": "khi"
          },
          {
            "startTime": 59219,
            "endTime": 59329,
            "data": "ta"
          },
          {
            "startTime": 59329,
            "endTime": 59359,
            "data": "gặp"
          },
          {
            "startTime": 59759,
            "endTime": 60029,
            "data": "nhau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 60389,
            "endTime": 60629,
            "data": "Để"
          },
          {
            "startTime": 60639,
            "endTime": 60999,
            "data": "dạy"
          },
          {
            "startTime": 60999,
            "endTime": 61029,
            "data": "nhau"
          },
          {
            "startTime": 61629,
            "endTime": 62029,
            "data": "cách"
          },
          {
            "startTime": 62179,
            "endTime": 62779,
            "data": "sống"
          },
          {
            "startTime": 62789,
            "endTime": 63109,
            "data": "trong"
          },
          {
            "startTime": 63129,
            "endTime": 63529,
            "data": "khổ"
          },
          {
            "startTime": 63699,
            "endTime": 63869,
            "data": "đau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 65029,
            "endTime": 65359,
            "data": "Đôi"
          },
          {
            "startTime": 65529,
            "endTime": 65969,
            "data": "chân"
          },
          {
            "startTime": 65969,
            "endTime": 66379,
            "data": "mang"
          },
          {
            "startTime": 66379,
            "endTime": 66549,
            "data": "lặng"
          },
          {
            "startTime": 66549,
            "endTime": 66849,
            "data": "thinh"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 67599,
            "endTime": 67799,
            "data": "Thương"
          },
          {
            "startTime": 68119,
            "endTime": 68529,
            "data": "một"
          },
          {
            "startTime": 68529,
            "endTime": 68879,
            "data": "người"
          },
          {
            "startTime": 68889,
            "endTime": 69229,
            "data": "không"
          },
          {
            "startTime": 69229,
            "endTime": 69249,
            "data": "hề"
          },
          {
            "startTime": 69249,
            "endTime": 69289,
            "data": "toan"
          },
          {
            "startTime": 70049,
            "endTime": 70289,
            "data": "tính"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 71959,
            "endTime": 72209,
            "data": "Đôi"
          },
          {
            "startTime": 72209,
            "endTime": 72229,
            "data": "khi"
          },
          {
            "startTime": 72229,
            "endTime": 72249,
            "data": "anh"
          },
          {
            "startTime": 73179,
            "endTime": 73489,
            "data": "dừng"
          },
          {
            "startTime": 73489,
            "endTime": 73739,
            "data": "lại"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 73999,
            "endTime": 74479,
            "data": "Chẳng"
          },
          {
            "startTime": 74479,
            "endTime": 74929,
            "data": "hiểu"
          },
          {
            "startTime": 74929,
            "endTime": 75229,
            "data": "đang"
          },
          {
            "startTime": 75329,
            "endTime": 76159,
            "data": "khóc"
          },
          {
            "startTime": 76229,
            "endTime": 76519,
            "data": "đang"
          },
          {
            "startTime": 76529,
            "endTime": 76939,
            "data": "đau"
          },
          {
            "startTime": 76939,
            "endTime": 76959,
            "data": "vì"
          },
          {
            "startTime": 76959,
            "endTime": 76969,
            "data": "ai"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 78829,
            "endTime": 79479,
            "data": "Khóc"
          },
          {
            "startTime": 79479,
            "endTime": 79549,
            "data": "vì,"
          },
          {
            "startTime": 80529,
            "endTime": 80689,
            "data": "đau"
          },
          {
            "startTime": 81129,
            "endTime": 81279,
            "data": "vì"
          },
          {
            "startTime": 81689,
            "endTime": 82019,
            "data": "duyên"
          },
          {
            "startTime": 82019,
            "endTime": 82279,
            "data": "mình"
          },
          {
            "startTime": 82279,
            "endTime": 82579,
            "data": "đã"
          },
          {
            "startTime": 82849,
            "endTime": 83049,
            "data": "sai"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 84730,
            "endTime": 85220,
            "data": "Nhiều"
          },
          {
            "startTime": 85230,
            "endTime": 85530,
            "data": "khi"
          },
          {
            "startTime": 85670,
            "endTime": 86110,
            "data": "muốn"
          },
          {
            "startTime": 86110,
            "endTime": 86420,
            "data": "một"
          },
          {
            "startTime": 86640,
            "endTime": 86670,
            "data": "mình"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 86970,
            "endTime": 87309,
            "data": "Nhưng"
          },
          {
            "startTime": 87319,
            "endTime": 87780,
            "data": "sợ"
          },
          {
            "startTime": 88209,
            "endTime": 88959,
            "data": "cô"
          },
          {
            "startTime": 88959,
            "endTime": 89279,
            "data": "đơn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 91469,
            "endTime": 92039,
            "data": "Sợ"
          },
          {
            "startTime": 92039,
            "endTime": 92289,
            "data": "cảm"
          },
          {
            "startTime": 92439,
            "endTime": 92799,
            "data": "giác"
          },
          {
            "startTime": 92899,
            "endTime": 93290,
            "data": "trống"
          },
          {
            "startTime": 93369,
            "endTime": 93399,
            "data": "vắng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 93779,
            "endTime": 94300,
            "data": "Mỗi"
          },
          {
            "startTime": 94300,
            "endTime": 94589,
            "data": "ngày"
          },
          {
            "startTime": 95119,
            "endTime": 95540,
            "data": "mỗi"
          },
          {
            "startTime": 95770,
            "endTime": 95979,
            "data": "lớn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 97949,
            "endTime": 98260,
            "data": "Sợ"
          },
          {
            "startTime": 98260,
            "endTime": 98519,
            "data": "chạm"
          },
          {
            "startTime": 98529,
            "endTime": 98919,
            "data": "vào"
          },
          {
            "startTime": 98919,
            "endTime": 99439,
            "data": "nỗi"
          },
          {
            "startTime": 99439,
            "endTime": 99829,
            "data": "nhớ"
          },
          {
            "startTime": 99829,
            "endTime": 100299,
            "data": "vu"
          },
          {
            "startTime": 100299,
            "endTime": 100459,
            "data": "vơ"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 101400,
            "endTime": 101660,
            "data": "Gian"
          },
          {
            "startTime": 101880,
            "endTime": 102380,
            "data": "gian"
          },
          {
            "startTime": 102380,
            "endTime": 102810,
            "data": "díu"
          },
          {
            "startTime": 102810,
            "endTime": 103179,
            "data": "díu"
          },
          {
            "startTime": 103209,
            "endTime": 103639,
            "data": "mập"
          },
          {
            "startTime": 103649,
            "endTime": 104029,
            "data": "mờ"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 105230,
            "endTime": 105740,
            "data": "Nắm"
          },
          {
            "startTime": 105750,
            "endTime": 106130,
            "data": "chưa"
          },
          {
            "startTime": 106130,
            "endTime": 106290,
            "data": "xong"
          },
          {
            "startTime": 107470,
            "endTime": 107790,
            "data": "đã"
          },
          {
            "startTime": 107930,
            "endTime": 108300,
            "data": "vội"
          },
          {
            "startTime": 108760,
            "endTime": 108940,
            "data": "đổ"
          },
          {
            "startTime": 109650,
            "endTime": 109790,
            "data": "vỡ"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 111909,
            "endTime": 112129,
            "data": "Ừ"
          },
          {
            "startTime": 112139,
            "endTime": 112719,
            "data": "thì"
          },
          {
            "startTime": 112729,
            "endTime": 113029,
            "data": "anh"
          },
          {
            "startTime": 113039,
            "endTime": 113529,
            "data": "thích"
          },
          {
            "startTime": 113559,
            "endTime": 113859,
            "data": "một"
          },
          {
            "startTime": 113989,
            "endTime": 114019,
            "data": "mình"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 114379,
            "endTime": 114789,
            "data": "Nhưng"
          },
          {
            "startTime": 114799,
            "endTime": 115150,
            "data": "sợ"
          },
          {
            "startTime": 115650,
            "endTime": 115800,
            "data": "cô"
          },
          {
            "startTime": 115800,
            "endTime": 115830,
            "data": "đơn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 118579,
            "endTime": 119089,
            "data": "Dù"
          },
          {
            "startTime": 119089,
            "endTime": 119479,
            "data": "đã"
          },
          {
            "startTime": 119479,
            "endTime": 119900,
            "data": "từng"
          },
          {
            "startTime": 119910,
            "endTime": 120529,
            "data": "nói"
          },
          {
            "startTime": 120529,
            "endTime": 120769,
            "data": "như"
          },
          {
            "startTime": 120769,
            "endTime": 121059,
            "data": "thế"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 121400,
            "endTime": 121650,
            "data": "Có"
          },
          {
            "startTime": 121650,
            "endTime": 121840,
            "data": "lẽ"
          },
          {
            "startTime": 121960,
            "endTime": 122440,
            "data": "sẽ"
          },
          {
            "startTime": 122440,
            "endTime": 122750,
            "data": "tốt"
          },
          {
            "startTime": 122750,
            "endTime": 122780,
            "data": "hơn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 125450,
            "endTime": 125689,
            "data": "Chỉ"
          },
          {
            "startTime": 125689,
            "endTime": 125959,
            "data": "là"
          },
          {
            "startTime": 125959,
            "endTime": 126349,
            "data": "vì"
          },
          {
            "startTime": 126349,
            "endTime": 126690,
            "data": "chẳng"
          },
          {
            "startTime": 126839,
            "endTime": 127299,
            "data": "muốn"
          },
          {
            "startTime": 127309,
            "endTime": 127700,
            "data": "yêu"
          },
          {
            "startTime": 128259,
            "endTime": 128469,
            "data": "ai"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 128919,
            "endTime": 129149,
            "data": "Khi"
          },
          {
            "startTime": 129149,
            "endTime": 129449,
            "data": "mình"
          },
          {
            "startTime": 129459,
            "endTime": 129680,
            "data": "anh"
          },
          {
            "startTime": 129800,
            "endTime": 130190,
            "data": "với"
          },
          {
            "startTime": 130209,
            "endTime": 130649,
            "data": "những"
          },
          {
            "startTime": 130649,
            "endTime": 131099,
            "data": "đêm"
          },
          {
            "startTime": 131099,
            "endTime": 131579,
            "data": "dài"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 132770,
            "endTime": 132960,
            "data": "Nghĩ"
          },
          {
            "startTime": 133019,
            "endTime": 133649,
            "data": "đi"
          },
          {
            "startTime": 133659,
            "endTime": 133949,
            "data": "em"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 135069,
            "endTime": 135440,
            "data": "Đâu"
          },
          {
            "startTime": 135440,
            "endTime": 135580,
            "data": "ai"
          },
          {
            "startTime": 135759,
            "endTime": 136030,
            "data": "chung"
          },
          {
            "startTime": 136040,
            "endTime": 136470,
            "data": "tình"
          },
          {
            "startTime": 136470,
            "endTime": 137060,
            "data": "được"
          },
          {
            "startTime": 137070,
            "endTime": 137570,
            "data": "mãi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 167979,
            "endTime": 168069,
            "data": "Đôi"
          },
          {
            "startTime": 168389,
            "endTime": 168499,
            "data": "khi"
          },
          {
            "startTime": 168849,
            "endTime": 169079,
            "data": "ta"
          },
          {
            "startTime": 169279,
            "endTime": 169509,
            "data": "gặp"
          },
          {
            "startTime": 169509,
            "endTime": 169699,
            "data": "nhau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 170119,
            "endTime": 170389,
            "data": "Để"
          },
          {
            "startTime": 170399,
            "endTime": 170910,
            "data": "dạy"
          },
          {
            "startTime": 170910,
            "endTime": 170940,
            "data": "nhau"
          },
          {
            "startTime": 171339,
            "endTime": 171949,
            "data": "cách"
          },
          {
            "startTime": 171959,
            "endTime": 172489,
            "data": "sống"
          },
          {
            "startTime": 172519,
            "endTime": 172859,
            "data": "trong"
          },
          {
            "startTime": 172859,
            "endTime": 172909,
            "data": "khổ"
          },
          {
            "startTime": 172909,
            "endTime": 172939,
            "data": "đau"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 174870,
            "endTime": 174940,
            "data": "Đôi"
          },
          {
            "startTime": 175300,
            "endTime": 175719,
            "data": "chân"
          },
          {
            "startTime": 175719,
            "endTime": 176129,
            "data": "mang"
          },
          {
            "startTime": 176129,
            "endTime": 176309,
            "data": "lặng"
          },
          {
            "startTime": 176529,
            "endTime": 176559,
            "data": "thinh"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 176359,
            "endTime": 176589,
            "data": "Thương"
          },
          {
            "startTime": 177779,
            "endTime": 178189,
            "data": "một"
          },
          {
            "startTime": 178199,
            "endTime": 178599,
            "data": "người"
          },
          {
            "startTime": 178609,
            "endTime": 179129,
            "data": "không"
          },
          {
            "startTime": 179239,
            "endTime": 179359,
            "data": "hề"
          },
          {
            "startTime": 179359,
            "endTime": 179699,
            "data": "toan"
          },
          {
            "startTime": 179769,
            "endTime": 179879,
            "data": "tính"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 181689,
            "endTime": 181969,
            "data": "Đôi"
          },
          {
            "startTime": 182519,
            "endTime": 182589,
            "data": "khi"
          },
          {
            "startTime": 182589,
            "endTime": 182729,
            "data": "anh"
          },
          {
            "startTime": 182930,
            "endTime": 183229,
            "data": "dừng"
          },
          {
            "startTime": 183229,
            "endTime": 183429,
            "data": "lại"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 183739,
            "endTime": 184219,
            "data": "Chẳng"
          },
          {
            "startTime": 184219,
            "endTime": 184690,
            "data": "hiểu"
          },
          {
            "startTime": 184690,
            "endTime": 184950,
            "data": "đang"
          },
          {
            "startTime": 184959,
            "endTime": 185450,
            "data": "khóc"
          },
          {
            "startTime": 185990,
            "endTime": 186259,
            "data": "đang"
          },
          {
            "startTime": 186259,
            "endTime": 186669,
            "data": "đau"
          },
          {
            "startTime": 186669,
            "endTime": 186809,
            "data": "vì"
          },
          {
            "startTime": 186809,
            "endTime": 186819,
            "data": "ai"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 188500,
            "endTime": 189209,
            "data": "Khóc"
          },
          {
            "startTime": 189209,
            "endTime": 189310,
            "data": "vì,"
          },
          {
            "startTime": 190240,
            "endTime": 190310,
            "data": "đau"
          },
          {
            "startTime": 190810,
            "endTime": 191050,
            "data": "vì"
          },
          {
            "startTime": 191419,
            "endTime": 191669,
            "data": "duyên"
          },
          {
            "startTime": 191709,
            "endTime": 191989,
            "data": "mình"
          },
          {
            "startTime": 191989,
            "endTime": 192449,
            "data": "đã"
          },
          {
            "startTime": 192599,
            "endTime": 192810,
            "data": "sai"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 194540,
            "endTime": 194940,
            "data": "Nhiều"
          },
          {
            "startTime": 194950,
            "endTime": 195269,
            "data": "khi"
          },
          {
            "startTime": 195379,
            "endTime": 195690,
            "data": "muốn"
          },
          {
            "startTime": 195810,
            "endTime": 196150,
            "data": "một"
          },
          {
            "startTime": 196400,
            "endTime": 196430,
            "data": "mình"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 196699,
            "endTime": 197049,
            "data": "Nhưng"
          },
          {
            "startTime": 197059,
            "endTime": 197560,
            "data": "sợ"
          },
          {
            "startTime": 197940,
            "endTime": 198680,
            "data": "cô"
          },
          {
            "startTime": 198680,
            "endTime": 198829,
            "data": "đơn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 201219,
            "endTime": 201769,
            "data": "Sợ"
          },
          {
            "startTime": 201769,
            "endTime": 202209,
            "data": "cảm"
          },
          {
            "startTime": 202209,
            "endTime": 202559,
            "data": "giác"
          },
          {
            "startTime": 202659,
            "endTime": 203069,
            "data": "trống"
          },
          {
            "startTime": 203069,
            "endTime": 203099,
            "data": "vắng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 203539,
            "endTime": 203979,
            "data": "Mỗi"
          },
          {
            "startTime": 204820,
            "endTime": 204899,
            "data": "ngày"
          },
          {
            "startTime": 204899,
            "endTime": 205280,
            "data": "mỗi"
          },
          {
            "startTime": 205510,
            "endTime": 205729,
            "data": "lớn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 207679,
            "endTime": 207969,
            "data": "Sợ"
          },
          {
            "startTime": 207979,
            "endTime": 208259,
            "data": "chạm"
          },
          {
            "startTime": 208259,
            "endTime": 208659,
            "data": "vào"
          },
          {
            "startTime": 208659,
            "endTime": 208869,
            "data": "nỗi"
          },
          {
            "startTime": 209060,
            "endTime": 209589,
            "data": "nhớ"
          },
          {
            "startTime": 209589,
            "endTime": 209790,
            "data": "vu"
          },
          {
            "startTime": 209790,
            "endTime": 209810,
            "data": "vơ"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 211129,
            "endTime": 211669,
            "data": "Gian"
          },
          {
            "startTime": 211669,
            "endTime": 212109,
            "data": "gian"
          },
          {
            "startTime": 212109,
            "endTime": 212529,
            "data": "díu"
          },
          {
            "startTime": 212529,
            "endTime": 212950,
            "data": "díu"
          },
          {
            "startTime": 212950,
            "endTime": 213369,
            "data": "mập"
          },
          {
            "startTime": 213369,
            "endTime": 213479,
            "data": "mờ"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 215039,
            "endTime": 215480,
            "data": "Nắm"
          },
          {
            "startTime": 215480,
            "endTime": 215860,
            "data": "chưa"
          },
          {
            "startTime": 215860,
            "endTime": 216129,
            "data": "xong"
          },
          {
            "startTime": 217199,
            "endTime": 217619,
            "data": "đã"
          },
          {
            "startTime": 217689,
            "endTime": 218069,
            "data": "vội"
          },
          {
            "startTime": 218499,
            "endTime": 218679,
            "data": "đổ"
          },
          {
            "startTime": 219349,
            "endTime": 219569,
            "data": "vỡ"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 221679,
            "endTime": 221859,
            "data": "Ừ"
          },
          {
            "startTime": 221869,
            "endTime": 222439,
            "data": "thì"
          },
          {
            "startTime": 222449,
            "endTime": 222769,
            "data": "anh"
          },
          {
            "startTime": 222779,
            "endTime": 223249,
            "data": "thích"
          },
          {
            "startTime": 223249,
            "endTime": 223719,
            "data": "một"
          },
          {
            "startTime": 223719,
            "endTime": 223809,
            "data": "mình"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 224119,
            "endTime": 224469,
            "data": "Nhưng"
          },
          {
            "startTime": 224489,
            "endTime": 224939,
            "data": "sợ"
          },
          {
            "startTime": 225429,
            "endTime": 225489,
            "data": "cô"
          },
          {
            "startTime": 225489,
            "endTime": 225519,
            "data": "đơn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 228299,
            "endTime": 228829,
            "data": "Dù"
          },
          {
            "startTime": 228829,
            "endTime": 229200,
            "data": "đã"
          },
          {
            "startTime": 229200,
            "endTime": 229440,
            "data": "từng"
          },
          {
            "startTime": 229619,
            "endTime": 230269,
            "data": "nói"
          },
          {
            "startTime": 230269,
            "endTime": 230479,
            "data": "như"
          },
          {
            "startTime": 230489,
            "endTime": 230869,
            "data": "thế"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 231180,
            "endTime": 231370,
            "data": "Có"
          },
          {
            "startTime": 231370,
            "endTime": 231599,
            "data": "lẽ"
          },
          {
            "startTime": 231699,
            "endTime": 232179,
            "data": "sẽ"
          },
          {
            "startTime": 232179,
            "endTime": 232529,
            "data": "tốt"
          },
          {
            "startTime": 234939,
            "endTime": 234970,
            "data": "hơn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 235230,
            "endTime": 235430,
            "data": "Chỉ"
          },
          {
            "startTime": 235430,
            "endTime": 235680,
            "data": "là"
          },
          {
            "startTime": 235690,
            "endTime": 236080,
            "data": "vì"
          },
          {
            "startTime": 236090,
            "endTime": 236540,
            "data": "chẳng"
          },
          {
            "startTime": 236540,
            "endTime": 237050,
            "data": "muốn"
          },
          {
            "startTime": 237060,
            "endTime": 237470,
            "data": "yêu"
          },
          {
            "startTime": 237660,
            "endTime": 237900,
            "data": "ai"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 238599,
            "endTime": 238889,
            "data": "Khi"
          },
          {
            "startTime": 238889,
            "endTime": 239179,
            "data": "mình"
          },
          {
            "startTime": 239189,
            "endTime": 239529,
            "data": "anh"
          },
          {
            "startTime": 239529,
            "endTime": 239959,
            "data": "với"
          },
          {
            "startTime": 239959,
            "endTime": 240399,
            "data": "những"
          },
          {
            "startTime": 240399,
            "endTime": 240839,
            "data": "đêm"
          },
          {
            "startTime": 240839,
            "endTime": 240999,
            "data": "dài"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 242409,
            "endTime": 242719,
            "data": "Nghĩ"
          },
          {
            "startTime": 242719,
            "endTime": 243349,
            "data": "đi"
          },
          {
            "startTime": 243359,
            "endTime": 243729,
            "data": "em"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 244809,
            "endTime": 244980,
            "data": "Đâu"
          },
          {
            "startTime": 245149,
            "endTime": 245470,
            "data": "ai"
          },
          {
            "startTime": 245480,
            "endTime": 245760,
            "data": "chung"
          },
          {
            "startTime": 245760,
            "endTime": 246210,
            "data": "tình"
          },
          {
            "startTime": 246210,
            "endTime": 246839,
            "data": "được"
          },
          {
            "startTime": 246839,
            "endTime": 246969,
            "data": "mãi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 249420,
            "endTime": 249809,
            "data": "Nhiều"
          },
          {
            "startTime": 249819,
            "endTime": 250219,
            "data": "khi"
          },
          {
            "startTime": 250219,
            "endTime": 250659,
            "data": "muốn"
          },
          {
            "startTime": 250659,
            "endTime": 250909,
            "data": "một"
          },
          {
            "startTime": 251090,
            "endTime": 251389,
            "data": "mình"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 251509,
            "endTime": 251900,
            "data": "Nhưng"
          },
          {
            "startTime": 251900,
            "endTime": 252149,
            "data": "sợ"
          },
          {
            "startTime": 252799,
            "endTime": 253069,
            "data": "cô"
          },
          {
            "startTime": 253069,
            "endTime": 253099,
            "data": "đơn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 256100,
            "endTime": 256609,
            "data": "Sợ"
          },
          {
            "startTime": 256609,
            "endTime": 257039,
            "data": "cảm"
          },
          {
            "startTime": 257039,
            "endTime": 257499,
            "data": "giác"
          },
          {
            "startTime": 257509,
            "endTime": 257979,
            "data": "trống"
          },
          {
            "startTime": 257989,
            "endTime": 258169,
            "data": "vắng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 258449,
            "endTime": 258819,
            "data": "Mỗi"
          },
          {
            "startTime": 258829,
            "endTime": 259279,
            "data": "ngày"
          },
          {
            "startTime": 259559,
            "endTime": 260179,
            "data": "mỗi"
          },
          {
            "startTime": 260179,
            "endTime": 260349,
            "data": "lớn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 262479,
            "endTime": 262819,
            "data": "Sợ"
          },
          {
            "startTime": 262819,
            "endTime": 263019,
            "data": "chạm"
          },
          {
            "startTime": 263049,
            "endTime": 263469,
            "data": "vào"
          },
          {
            "startTime": 263479,
            "endTime": 263879,
            "data": "nỗi"
          },
          {
            "startTime": 263889,
            "endTime": 264389,
            "data": "nhớ"
          },
          {
            "startTime": 264389,
            "endTime": 264869,
            "data": "vu"
          },
          {
            "startTime": 264869,
            "endTime": 264949,
            "data": "vơ"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 266019,
            "endTime": 266360,
            "data": "Gian"
          },
          {
            "startTime": 266519,
            "endTime": 266860,
            "data": "gian"
          },
          {
            "startTime": 266950,
            "endTime": 267350,
            "data": "díu"
          },
          {
            "startTime": 267360,
            "endTime": 267789,
            "data": "díu"
          },
          {
            "startTime": 267789,
            "endTime": 268259,
            "data": "mập"
          },
          {
            "startTime": 268259,
            "endTime": 268369,
            "data": "mờ"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 269809,
            "endTime": 270230,
            "data": "Nắm"
          },
          {
            "startTime": 270340,
            "endTime": 270710,
            "data": "chưa"
          },
          {
            "startTime": 270720,
            "endTime": 271250,
            "data": "xong"
          },
          {
            "startTime": 272070,
            "endTime": 272520,
            "data": "đã"
          },
          {
            "startTime": 272520,
            "endTime": 273210,
            "data": "vội"
          },
          {
            "startTime": 273410,
            "endTime": 273710,
            "data": "đổ"
          },
          {
            "startTime": 274210,
            "endTime": 274320,
            "data": "vỡ"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 275569,
            "endTime": 275579,
            "data": "Ừ"
          },
          {
            "startTime": 276800,
            "endTime": 276900,
            "data": "thì"
          },
          {
            "startTime": 277280,
            "endTime": 277480,
            "data": "anh"
          },
          {
            "startTime": 277630,
            "endTime": 277939,
            "data": "thích"
          },
          {
            "startTime": 278109,
            "endTime": 278439,
            "data": "một"
          },
          {
            "startTime": 278579,
            "endTime": 278769,
            "data": "mình"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 279019,
            "endTime": 279369,
            "data": "Nhưng"
          },
          {
            "startTime": 279369,
            "endTime": 279589,
            "data": "sợ"
          },
          {
            "startTime": 280249,
            "endTime": 280439,
            "data": "cô"
          },
          {
            "startTime": 280439,
            "endTime": 280469,
            "data": "đơn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 283189,
            "endTime": 283709,
            "data": "Dù"
          },
          {
            "startTime": 283709,
            "endTime": 284059,
            "data": "đã"
          },
          {
            "startTime": 284059,
            "endTime": 284509,
            "data": "từng"
          },
          {
            "startTime": 284519,
            "endTime": 285039,
            "data": "nói"
          },
          {
            "startTime": 285129,
            "endTime": 285349,
            "data": "như"
          },
          {
            "startTime": 285349,
            "endTime": 285469,
            "data": "thế"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 286019,
            "endTime": 286230,
            "data": "Có"
          },
          {
            "startTime": 286230,
            "endTime": 286610,
            "data": "lẽ"
          },
          {
            "startTime": 286619,
            "endTime": 287029,
            "data": "sẽ"
          },
          {
            "startTime": 287029,
            "endTime": 287209,
            "data": "tốt"
          },
          {
            "startTime": 287209,
            "endTime": 287239,
            "data": "hơn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 290109,
            "endTime": 290319,
            "data": "Chỉ"
          },
          {
            "startTime": 290319,
            "endTime": 290549,
            "data": "là"
          },
          {
            "startTime": 290549,
            "endTime": 290939,
            "data": "vì"
          },
          {
            "startTime": 290939,
            "endTime": 291149,
            "data": "chẳng"
          },
          {
            "startTime": 291419,
            "endTime": 291789,
            "data": "muốn"
          },
          {
            "startTime": 291859,
            "endTime": 292199,
            "data": "yêu"
          },
          {
            "startTime": 292279,
            "endTime": 293289,
            "data": "ai"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 293539,
            "endTime": 293749,
            "data": "Khi"
          },
          {
            "startTime": 293749,
            "endTime": 294029,
            "data": "mình"
          },
          {
            "startTime": 294039,
            "endTime": 294389,
            "data": "anh"
          },
          {
            "startTime": 294399,
            "endTime": 294829,
            "data": "với"
          },
          {
            "startTime": 294829,
            "endTime": 295259,
            "data": "những"
          },
          {
            "startTime": 295259,
            "endTime": 295699,
            "data": "đêm"
          },
          {
            "startTime": 295699,
            "endTime": 295919,
            "data": "dài"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 297349,
            "endTime": 297679,
            "data": "Nghĩ"
          },
          {
            "startTime": 297679,
            "endTime": 298219,
            "data": "đi"
          },
          {
            "startTime": 299269,
            "endTime": 299289,
            "data": "em"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 299679,
            "endTime": 299949,
            "data": "Đâu"
          },
          {
            "startTime": 300029,
            "endTime": 300369,
            "data": "ai"
          },
          {
            "startTime": 300369,
            "endTime": 300449,
            "data": "chung"
          },
          {
            "startTime": 300609,
            "endTime": 301079,
            "data": "tình"
          },
          {
            "startTime": 301079,
            "endTime": 301709,
            "data": "được"
          },
          {
            "startTime": 301709,
            "endTime": 301939,
            "data": "mãi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 304199,
            "endTime": 304680,
            "data": "Nghĩ"
          },
          {
            "startTime": 304680,
            "endTime": 305089,
            "data": "đi"
          },
          {
            "startTime": 305099,
            "endTime": 305739,
            "data": "em"
          }
        ]
      }
    ],
    "file": "https://static-zmp3.zmdcdn.me/lyrics/4/5/3/e/453e939b626b8ffb90ee15de489cd6ee.lrc",
    "enabledVideoBG": true,
    "defaultIBGUrls": [
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/c/0/5/3c05c10ae36f6361f9af0874bb7c4851.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/e/0/bbe01e4bf6d8e23101fcb6db44df311d.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/1/f/3/a1f34293d1dc92735be8c3f9082c4acf.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/e/9/5/6e95b598e1e14a187ee779bcd888e75c.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/c/8/1/1c81e957a6270eba91571d822a47e7c5.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/0/d/000d9d0679bbbb564a191a6801d7f19d.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/6/4/f/e64f4fd6f53caebabc1c26d592093cfa.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/e/3/1/de315c40b537d40b7409a6702f446631.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/4/6/2/1462efc7378bed3f98ace411e11eab45.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/b/f/a/5bfa05533ed7975035e69a4508c82fd6.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/2/b/1/f2b1b91fa64e0c354150c86fd96c249c.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/1/f/b/51fbcd4ae32096ffe2dd89cd36bb6ed9.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/2/3/9/62392463eab1eb1aaa2d1f3bd0f758bb.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/2/f/0/12f01e12d6e13e263ef76f3fdb65d66e.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/8/2/4/8824ef8e3e3aa3e302f03879a1f9d7d3.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/3/4/9/43491e9d95a9942015548bd2a061250d.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/9/8/7/5/987517940ce71a96bab9c0c88d5b6b95.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/e/2/4/8e24305fde744814083af980a593e8c2.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/1/2/7/f1270dd1bed79b527228e3351d2b67ae.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/a/3/0/0a301934881ee4e2de30dc8f41bc55f9.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/c/9/f/cc9fce8719364ba9d8a846984c590a0e.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/5/d/e/e5de86acd7567465f54a6b9307076947.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/4/b/b/64bb19c5f971b4e4f16f3bfdff64a396.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/3/2/0/03206606d461843e22451747a9b60769.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/d/4/4/bd4485d6dfef80764869a4d88d9b0475.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/8/6/8/e86817d147315d9d644835f60d17ae41.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/4/7/bb477f2f56f162b13426f70c9858c732.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/5/3/6/c536ff6ab992e36be24ca0adf8e86ae0.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/c/f/c/6cfc1e6e3b94c62cded257659602f00b.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/5/d/6/25d6adaa11b4e932d61309ed635d57fa.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/2/a/e/d2ae42243ccd4fec321fc60692a5a2dc.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/8/0/e/b80e5777c7eec332c882bf79bd692056.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/7/b/a/e7ba1207018f1d2fa7048598c7d627df.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/f/4/0/3f40bd0d6d8cbcf833c72ab050f19e6a.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/d/a/d/adad060e15f8409ec2e7670cf943c202.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/d/1/7/ed17742d63b635725e6071a9bee362c5.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/a/e/8/3ae816de233a9eae0116b4b5a21af43e.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/7/f/1/d7f15e3996e7923ffc2a64d1f8e43448.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/7/e/007e6b48696aab4a61ca46a10d980f63.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/9/f/5/d9f592437d80e358a76e32798ce2d294.jpg"
    ],
    "BGMode": 0
  },
  "timestamp": 1694357619795
}`;

lyric = JSON.parse(lyric).data.sentences;
console.log(lyric);

//Xây dựng tính năng karaoke
var karaoke = document.querySelector(".karaoke");
var karaokePlayBtn = document.querySelector(".play");
var karaokeInner = karaoke.querySelector(".karaoke-inner");
var karaokeClose = karaokeInner.querySelector(".close");
var karaokeContent = karaokeInner.querySelector(".karaoke-content");

var songInfo = `
<p>Ai chung tình được mãi</p>
<p>Ca sỹ: Lưu Anh Quân</p>
`;

karaokePlayBtn.addEventListener("click", function () {
  karaokeInner.classList.add("show");
  karaokeContent.innerHTML = songInfo;
});

karaokeClose.addEventListener("click", function () {
  karaokeInner.classList.remove("show");
  karaokeContent.innerHTML = "";
});

var number = 2;

var handleKaraoke = function (currentTime) {
  //Quy đổi currentTime ra mili giây
  currentTime *= 1000;

  var index = lyric.findIndex(function (wordItem) {
    var wordItemArr = wordItem.words;
    return (
      currentTime >= wordItemArr[0].startTime &&
      currentTime <= wordItemArr[wordItemArr.length - 1].endTime
    );
  });

  if (index !== -1) {
    // var karaokeContent = karaokeInner.querySelector(".karaoke-content");
    karaokeContent.innerText = "";

    /*
    Page = 1 -> index = 0 đến 1
    Page = 2 -> index = 2 đến 3
    Page = 3 -> index = 4 đến 5

    index = (page - 1) * 2
    Công thức: page = index / 2 + 1
    */

    var page = Math.floor(index / number + 1);

    var offset = (page - 1) * number;

    // console.log(`Màn hình thứ: ${page}`);
    // console.log(`Index = ${index}`, `Offset = ${offset}`);

    if (index >= offset && index < offset + number) {
      var div = document.createElement("div");

      for (var i = offset; i < offset + number; i++) {
        //Vòng lặp các câu trong 1 màn hình
        var p = document.createElement("p");

        //Vòng lặp các từ trong 1 câu
        lyric[i].words.forEach(function (word) {
          var wordEl = document.createElement("span");
          wordEl.classList.add("word");
          wordEl.innerText = word.data + "";

          var span = document.createElement("span");
          span.innerText = word.data;
          wordEl.append(span);

          p.append(wordEl);

          if (currentTime >= word.startTime) {
            span.style.width = `100%`;
          }
          if (currentTime >= word.startTime && currentTime <= word.endTime) {
            var wordTime = word.endTime - word.startTime;
            // var start = currentTime - wordTime;
          }
        });

        div.append(p);

        // if (p.previousElementSibling !== null) {
        //   p.previousElementSibling.remove();
        // }
      }

      karaokeContent.append(div);
    }
  }
};

var handleColor = function (currentTime, index, page) {
  console.log(page);

  var wordItems = karaokeContent.querySelector(".word");
  lyric[index].words.forEach(function (word, i) {
    if (currentTime >= word.startTime) {
      console.log(word.data);
    }
  });
};
