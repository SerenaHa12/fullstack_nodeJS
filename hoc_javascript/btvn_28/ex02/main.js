document.addEventListener("DOMContentLoaded", function () {
    const lyricsContainer = document.getElementById("lyrics-container");
    const audio = document.getElementById("audio");

    // Dữ liệu lời bài hát đã được chuyển đổi thành biến "data"
    const lyricsData = data.lyrics;

    let currentLyricIndex = -1;

    // Cập nhật lời bài hát dựa trên thời gian khi nhạc chạy
    audio.addEventListener("timeupdate", () => {
        const currentTime = audio.currentTime;

        for (let i = 0; i < lyricsData.length; i++) {
            if (currentTime >= lyricsData[i].time && currentTime < lyricsData[i + 1]?.time) {
                if (currentLyricIndex !== i) {
                    currentLyricIndex = i;
                    displayLyrics(lyricsData[i].text);
                }
                break;
            }
        }
    });

    // Hàm hiển thị lời bài hát
    function displayLyrics(lyricText) {
        lyricsContainer.textContent = lyricText;
    }

    // Hàm chuyển đổi thời gian từ chuỗi "[mm:ss.ss]" thành giây
    function parseTime(timeStr) {
        const [minutes, seconds] = timeStr.split(":").map(parseFloat);
        return minutes * 60 + seconds;
    }

    // Biến "data" chứa dữ liệu lời bài hát đã chuyển đổi từ tệp văn bản
    var data = {
        "lyrics": [
            { "time": 0.00, "text": "Này em ơi, tại sao em nỡ lừa dối" },
            { "time": 4.72, "text": "Tình ta giờ đã cạn kiệt, nhạt nhoà" },
            { "time": 9.66, "text": "Khi em đã mang trái tim đến đây" },
            // ...
        ]
    };
});
