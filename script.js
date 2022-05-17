let btn = document.getElementById("challenge-btn");
let output = document.getElementById("challenge-output");
let exerciseSubmit = document.getElementById("exercise-submit"); //submit button
let input = document.getElementById("exercise-input"); //user input
let exerciseLogSubVis = document.getElementById("exercise-log-submissions"); //view log
let logSub = []; //info in view log
let error = document.getElementById("error-text");
let challenges = [
  "100 jumping jacks 🤸‍♀️",
  "20 crunches 🚶‍♂️",
  "30 squats 🏋️",
  "40 russian twists 🪢",
  "30 sit-ups 🧘",
  "60-second plank ⌚",
  "15 burpees 🤸‍♀️",
  "30 bicycles 🚴‍♂️",
  "50 high knees 🕺",
  "15 side lunges (each leg) 🏋️",
  "15 leg lifts (each leg) 🦵",
  "10 jump squats 🤸",
];
btn.addEventListener("click", function () {
  var randomChallenge =
    challenges[Math.floor(Math.random() * challenges.length)];
  output.innerHTML = randomChallenge;
});

//energy level functions
let element = document.getElementById("energy-advice");
let button1 = document.getElementById("EB1");
let button2 = document.getElementById("EB2");
let button3 = document.getElementById("EB3");
let button4 = document.getElementById("EB4");
let button5 = document.getElementById("EB5");

function E1() {
  element.innerHTML =
    "It's time to take a healthy break...  /(ㄒoㄒ)/~~ <br/> • drink a glass of water <br/> • take a power nap <br/> • do some stretches";
  var image = document.getElementById("img");
  image.src =
    "https://cdn.glitch.global/ba89a50e-4f87-4a07-9c27-086b0b9860b2/peach2-removebg-preview.png?v=1651357267606";
  if (button1.style.backgroundColor === "rgb(255,127,80, 0.2)") {
    button1.style.backgroundColor = "rgb(0, 0, 0)";
  } else {
    button1.style.backgroundColor = "rgb(255,127,80, 0.2)";
  }
}

function E2() {
  element.innerHTML =
    "Let's do some light exercise. （*＾-＾*） <br/> • go for a stroll to get fresh air- <br/> • do some yoga <br/> • try a new hobby";
  var image = document.getElementById("img");
  image.src =
    "https://cdn.glitch.global/ba89a50e-4f87-4a07-9c27-086b0b9860b2/peach1-removebg-preview.png?v=1651357262099";
}

function E3() {
  element.innerHTML =
    "Ready for a workout! o(^▽^)o <br/> • go for a jog around your neighborhood <br/> • bike to the nearest park <br/> • go on a picnic";
  var image = document.getElementById("img");
  image.src =
    "https://cdn.glitch.global/ba89a50e-4f87-4a07-9c27-086b0b9860b2/peach-removebg-preview.png?v=1651357265177";
}

function E4() {
  element.innerHTML =
    "Time to get moving!! ╰(*°▽°*)╯ <br/> • go weightlifting at the gym - <br/> • do 100M sprints <br/> • try some zumba";
  var image = document.getElementById("img");
  image.src =
    "https://cdn.glitch.global/ba89a50e-4f87-4a07-9c27-086b0b9860b2/peach3-removebg-preview.png?v=1651357273310";
}

function E5() {
  element.innerHTML =
    "Get HYPE!!! ☆*: .｡. o(≧▽≦)o .｡.:*☆ <br/> • run until you see the color purple <br/> • try some boxing <br/> • learn a kpop dance";
  var image = document.getElementById("img");
  image.src =
    "https://cdn.glitch.global/ba89a50e-4f87-4a07-9c27-086b0b9860b2/peach4-removebg-preview.png?v=1651357275604";
}

button1.addEventListener("click", function onClick() {
  button1.style.backgroundColor = "rgb(255,127,80, 0.2)";
  button2.style.backgroundColor = "rgb(255, 255, 255)";
  button3.style.backgroundColor = "rgb(255, 255, 255)";
  button4.style.backgroundColor = "rgb(255, 255, 255)";
  button5.style.backgroundColor = "rgb(255, 255, 255)";
});

button2.addEventListener("click", function onClick() {
  button1.style.backgroundColor = "rgb(255,127,80, 0.2)";
  button2.style.backgroundColor = "rgb(255,127,80, 0.4)";
  button3.style.backgroundColor = "rgb(255, 255, 255)";
  button4.style.backgroundColor = "rgb(255, 255, 255)";
  button5.style.backgroundColor = "rgb(255, 255, 255)";
});

button3.addEventListener("click", function onClick() {
  button1.style.backgroundColor = "rgb(255,127,80, 0.2)";
  button2.style.backgroundColor = "rgb(255,127,80, 0.4)";
  button3.style.backgroundColor = "rgb(255,127,80, 0.6)";
  button4.style.backgroundColor = "rgb(255, 255, 255)";
  button5.style.backgroundColor = "rgb(255, 255, 255)";
});

button4.addEventListener("click", function onClick() {
  button1.style.backgroundColor = "rgb(255,127,80, 0.2)";
  button2.style.backgroundColor = "rgb(255,127,80, 0.4)";
  button3.style.backgroundColor = "rgb(255,127,80, 0.6)";
  button4.style.backgroundColor = "rgb(255,127,80, 0.8)";
  button5.style.backgroundColor = "rgb(255, 255, 255)";
});

button5.addEventListener("click", function onClick() {
  button1.style.backgroundColor = "rgb(255,127,80, 0.2)";
  button2.style.backgroundColor = "rgb(255,127,80, 0.4)";
  button3.style.backgroundColor = "rgb(255,127,80, 0.6)";
  button4.style.backgroundColor = "rgb(255,127,80, 0.8)";
  button5.style.backgroundColor = "rgb(255,127,80, 1)";
});

exerciseSubmit.addEventListener("click", function onClick() {
  let exerciseInput = input.value;
  if (exerciseInput.length < 1)
    error.innerText = "Error: you left the field empty";
  else {
    let exerciseInputPrint = logSub.length + 1 + ". " + exerciseInput + "\n";
    logSub.push(exerciseInputPrint);
    let logSubPrint = logSub.join(" ");
    exerciseLogSubVis.innerText = logSubPrint;
    input.value = "";
    error.innerText = "";
  }
});

/************************ MUSIC ************************/
const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const currTime = document.querySelector("#currTime");
const durTime = document.querySelector("#durTime");

// Song titles
const songs = ["Can't Hold Us", "Moves Like Jagger", "Good Time"];
const music = [
  "https://cdn.glitch.global/ba89a50e-4f87-4a07-9c27-086b0b9860b2/cantholdus%20.mp3?v=1651364971601",
  "https://cdn.glitch.global/ba89a50e-4f87-4a07-9c27-086b0b9860b2/Moves%20Like%20Jagger%20-%20Maroon%205%20featuring%20Christina%20Aguilera.mp3?v=1651364975692",
  "https://cdn.glitch.global/ba89a50e-4f87-4a07-9c27-086b0b9860b2/Good%20Time%20(Lyrics).mp3?v=1651364973325",
];
// Keep track of song
let songIndex = 2;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = music[songIndex];
  cover.src =
    "https://cdn.glitch.global/ba89a50e-4f87-4a07-9c27-086b0b9860b2/peaches.webp?v=1651364269900";
}

// Play song
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//get duration & currentTime for Time of song
function DurTime(e) {
  const { duration, currentTime } = e.srcElement;
  var sec;
  var sec_d;

  // define minutes currentTime
  let min = currentTime == null ? 0 : Math.floor(currentTime / 60);
  min = min < 10 ? "0" + min : min;

  // define seconds currentTime
  function get_sec(x) {
    if (Math.floor(x) >= 60) {
      for (var i = 1; i <= 60; i++) {
        if (Math.floor(x) >= 60 * i && Math.floor(x) < 60 * (i + 1)) {
          sec = Math.floor(x) - 60 * i;
          sec = sec < 10 ? "0" + sec : sec;
        }
      }
    } else {
      sec = Math.floor(x);
      sec = sec < 10 ? "0" + sec : sec;
    }
  }

  get_sec(currentTime, sec);

  // change currentTime DOM
  currTime.innerHTML = min + ":" + sec;

  // define minutes duration
  let min_d = isNaN(duration) === true ? "0" : Math.floor(duration / 60);
  min_d = min_d < 10 ? "0" + min_d : min_d;

  function get_sec_d(x) {
    if (Math.floor(x) >= 60) {
      for (var i = 1; i <= 60; i++) {
        if (Math.floor(x) >= 60 * i && Math.floor(x) < 60 * (i + 1)) {
          sec_d = Math.floor(x) - 60 * i;
          sec_d = sec_d < 10 ? "0" + sec_d : sec_d;
        }
      }
    } else {
      sec_d = isNaN(duration) === true ? "0" : Math.floor(x);
      sec_d = sec_d < 10 ? "0" + sec_d : sec_d;
    }
  }

  // define seconds duration

  get_sec_d(duration);

  // change duration DOM
  durTime.innerHTML = min_d + ":" + sec_d;
}

// Event listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// Time/song update
audio.addEventListener("timeupdate", updateProgress);

// Click on progress bar
progressContainer.addEventListener("click", setProgress);

// Song ends
audio.addEventListener("ended", nextSong);

// Time of song
audio.addEventListener("timeupdate", DurTime);
