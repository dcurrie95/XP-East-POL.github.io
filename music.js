var toggleImg = document.getElementById("musToggle");
var musicState = false;


function toggleMusic() {
  if(musicState) {musicState = false;} else {musicState = true;}
  
  if(musicState) {
    document.getElementById("audio").play();
    toggleImg.src = "media/music.png";
  } else {
    document.getElementById("audio").pause();
    toggleImg.src = "media/music-off.jpg";
  }
}
