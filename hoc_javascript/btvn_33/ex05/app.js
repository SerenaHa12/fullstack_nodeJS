// const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const btn = document.querySelector(".btn");
const recognition = new webkitSpeechRecognition();
recognition.continuous = false; // Dừng khi ngừng nói
recognition.lang = "vi-VN";

const actions = {
  google: {
    url: "https://www.google.com",
    message: "Đang thực hiện tìm kiếm Google...",
  },
  facebook: {
    url: "https://www.facebook.com",
    message: "Đang thực hiện tìm kiếm Facebook...",
  },
  youtube: {
    url: "https://www.youtube.com",
    message: "Đang thực hiện tìm kiếm YouTube...",
  },
  "google drive": {
    url: "https://drive.google.com",
    message: "Đang thực hiện tìm kiếm Google Drive...",
  },
  "google maps": {
    url: "https://maps.google.com",
    message: "Đang thực hiện tìm kiếm Bản đồ Google...",
  },
  "bản đồ": {
    url: "https://maps.google.com",
    message: "Đang thực hiện tìm kiếm Bản đồ Google...",
  },
};

function openUrl(url) {
  if (url) {
    window.open(url, "_blank");
  }
}

function showExecutingMessage(message) {
  result.textContent = message;
}

function handleDirections(input) {
  const url = `https://maps.google.com/maps?q=${encodeURIComponent(input)}`;
  openUrl(url);
}

function handleMusic(input) {
  const url = `https://zingmp3.vn/tim-kiem/bai-hat.html?q=${encodeURIComponent(
    input
  )}`;
  openUrl(url);
}

function handleVideo(input) {
  const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    input
  )}`;
  openUrl(url);
}

btn.addEventListener("click", () => {
  recognition.start();
});

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript.toLowerCase();
  let action;

  if (transcript.includes("google")) {
    action = "google";
  } else if (transcript.includes("facebook")) {
    action = "facebook";
  } else if (transcript.includes("youtube")) {
    action = "youtube";
  } else if (transcript.includes("google drive")) {
    action = "google drive";
  } else if (
    transcript.includes("google maps") ||
    transcript.includes("bản đồ")
  ) {
    action = "google maps";
  } else if (
    transcript.includes("chỉ đường") ||
    transcript.includes("đường tới") ||
    transcript.includes("tới") ||
    transcript.includes("đường tới")
  ) {
    // chỉ đường
    const handleText = transcript
      .replace("chỉ đường", "")
      .replace("đường tới", "")
      .replace("tới", "")
      .replace("đường tới", "")
      .trim();
    handleDirections(handleText);
    return;
  } else if (
    transcript.includes("nghe bài hát") ||
    transcript.includes("mở bài hát") ||
    transcript.includes("bài hát")
  ) {
    // bài hát
    const handleText = transcript
      .replace("nghe bài hát", "")
      .replace("mở bài hát", "")
      .replace("bài hát", "")
      .trim();
    handleMusic(handleText);
    return;
  } else if (
    transcript.includes("xem video") ||
    transcript.includes("mở video") ||
    transcript.includes("video")
  ) {
    // video
    const handleText = transcript
      .replace("xem video", "")
      .replace("mở video", "")
      .replace("video", "")
      .trim();
    handleVideo(handleText);
    return;
  } else {
    action = "default";
  }

  if (action === "default") {
    showExecutingMessage("Không thực hiện được yêu cầu");
  } else {
    const { url, message } = actions[action];
    showExecutingMessage(message);
    openUrl(url);
  }
};
