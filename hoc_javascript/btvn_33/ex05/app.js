const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

const recognition = new webkitSpeechRecognition();
recognition.continuous = false; // Dừng khi ngừng nói
recognition.lang = "en-US";

const actions = {
  google: () => {
    window.open("https://www.google.com", "_blank");
  },
  facebook: () => {
    window.open("https://www.facebook.com", "_blank");
  },
  youtube: () => {
    window.open("https://www.youtube.com", "_blank");
  },
  "google drive": () => {
    window.open("https://drive.google.com", "_blank");
  },
  "google maps": () => {
    window.open("https://maps.google.com", "_blank");
  },
  "bản đồ": () => {
    window.open("https://maps.google.com", "_blank");
  },
  "chỉ đường": () => {
    handleMap();
  },
  "mở bài hát": () => {
    handleMusic();
  },
  "nghe bài hát": () => {
    handleMusic();
  },
  "mở video": () => {
    handleVideo();
  },
  "xem video": () => {
    handleVideo();
  },
  default: () => {
    result.textContent = "Không thực hiện được yêu cầu";
  },
};

// Chỉ đường
function handleMap() {
  const input = prompt("Vui lòng nhập địa điểm cần đến:");
  if (input) {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      input
    )}`;
    window.open(url, "_blank");
  }
}

// Bài hát
function handleMusic() {
  const input = prompt("Nhập tên bài hát hoặc ca sĩ:");
  if (input) {
    const url = `https://www.zingmp3.vn/tim-kiem/bai-hat.html?q=${encodeURIComponent(
      input
    )}`;
    window.open(url, "_blank");
  }
}

// Video
function handleVideo() {
  const input = prompt("Nhập tên video:");
  if (input) {
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(
      input
    )}`;
    window.open(url, "_blank");
  }
}

btn.addEventListener("click", () => {
  recognition.start();
});

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript.toLowerCase();
  const action =
    Object.keys(actions).find((keyword) => transcript.includes(keyword)) ||
    "default";
  actions[action]();
};
