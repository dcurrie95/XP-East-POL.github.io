var toggleImg = document.getElementById("musToggle");
var audio = document.getElementById("audio");
var musicState = false;


function toggleMusic() {
  if(musicState) {musicState = false;} else {musicState = true;}
  
  if(musicState) {
    //audio.play();
    toggleImg.src = "media/music.png";
  } else {
    //audio.pause();
    toggleImg.src = "media/music-off.jpg";
  }
}