var currentMusic = 0;

var music = document.querySelector('#audio');
var seekBar = document.querySelector('.seek-bar');
var songName = document.querySelector('.music-name');
var artistName = document.querySelector('.artist-name');
var disk = document.querySelector('.disk');
var currentTime = document.querySelector('.current-time');
var songDuaration = document.querySelector('.song-duaration');
var playBtn = document.querySelector('.play-btn');

playBtn.addEventListener('click', function() {
    if (playBtn.className.includes('pause')) {
        music.play();
    } else {
        music.pause();
    }
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
})

var setMusic = (i) => {
    seekBar.value = 0;
    var song = songs[i];
    currentMusic = i;
    music.src = song.path;
    console.log(song);

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    disk.computedStyleMap.backgroundImage = `url('${song.cover}')`;

    currentTime.innerHTML = '00:00';
    setTimeout(() => {
        seekBar.max = music.duaration;
        songDuaration.innerHTML = formatTime(music.duaration)
    }, 300)
    console.log(songDuaration);
    console.log(music.duaration);
}
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
    return `${min} : ${sec}`
}

setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime)
}, 500)