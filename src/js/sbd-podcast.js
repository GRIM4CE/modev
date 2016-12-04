'use strict';

let hostImages = document.querySelectorAll('.host-image');
let podcasts = document.querySelectorAll('.podcast-container');
let podcastsPlayButtons = document.querySelectorAll('.play-button');
let allAudio = document.querySelectorAll('audio');

// Control vars
let timeline = document.querySelector('.timeline')
let playhead = document.querySelector('.playhead')
let timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
let duration;
let onplayhead = false;


/* Host Bio Setup */
// Bind Host
let bindHostBio = function(hostImage) {
  hostImage.addEventListener('mouseenter', toggleHostBio);
  hostImage.addEventListener('mouseleave', toggleHostBio);
}

// Display Host Biography
let toggleHostBio = function() {
  let hostBox = this.parentNode;
  let hostBio = hostBox.querySelector('.host-bio');
  hostBio.classList.toggle('hidden');
}

/* Podcasts Setup */
// Bind Podcast
let bindPodcast = function(podcast) {
  let playButton = podcast.querySelector('.play-button');
  let volumeButton = podcast.querySelector('.volume-button');
  let shareButton = podcast.querySelector('.share-button');
  let audio = podcast.querySelector('audio');
  let timeline = podcast.querySelector('.timeline');


  // Audio Timeline event listeners
  audio.addEventListener("timeupdate", timeUpdate);
  audio.addEventListener("canplaythrough", function() {
    duration = audio.duration;
  }, false);

  //Makes timeline clickable
  timeline.addEventListener("click", function(event) {
    moveplayhead(event);
    audio.currentTime = duration * clickPercent(event);
  });

  // Makes playhead draggable
  playhead.addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);

  // mouseDown EventListener
  function mouseDown() {
    onplayhead = true;
    window.addEventListener('mousemove', moveplayhead, true);
    audio.removeEventListener('timeupdate', timeUpdate, false);
  }

  // mouseUp EventListener
  // getting input from all mouse clicks
  function mouseUp(e) {
    if (onplayhead == true) {
      moveplayhead(e);
      window.removeEventListener('mousemove', moveplayhead, true);
      // change current time
      audio.currentTime = duration * clickPercent(e);
      audio.addEventListener('timeupdate', timeUpdate, false);
    }
    onplayhead = false;
  }

  // Audio Play Button
  playButton.addEventListener('click', playAudio);

  // Toggle Volume
  volumeButton.addEventListener('click', toggleVolume);

  // Toggle Share
  shareButton.addEventListener('click', toggleShareButtons);
}

// Play Audio Files
let playAudio = function() {
  let podcastContainer = this.parentNode;
  let playButton = this;
  let playIcon = playButton.querySelector('i');
  let audio = podcastContainer.querySelector('audio');

  if (audio.paused) {
    resetAudio();
    audio.play();
    playIcon.className = "fa fa-pause";
    playButton.classList.add('active');
  } else {
    audio.pause();
    playIcon.className = "fa fa-play";
    playButton.classList.remove('active');
  }
}

// Reset Audio Files
let resetAudio = function() {
  for (let i = 0; i < podcasts.length; i++) {
    let audio = podcasts[i].querySelector('audio');
    let playButton = podcasts[i].querySelector('.play-button');
    let playIcon = playButton.querySelector('i');

    audio.pause();
    playIcon.className = "fa fa-play"
    playButton.classList.remove('active');
  }
}

// Toggle Volume of Audio Files
let toggleVolume = function() {
  let volumeIcon = this;
  let podcastContainer = this.parentNode.parentNode;
  let audio = podcastContainer.querySelector('audio')

  if (audio.muted) {
    audio.muted = false;
    volumeIcon.className = "fa fa-volume-up volume-button"
  } else {
    audio.muted = true;
    volumeIcon.className = "fa fa-volume-off volume-button"
  }
}

// Toggle Share Buttons
let toggleShareButtons = function() {
  let shareIcon = this;
  let shareContainer = this.parentNode;
  let shareBox = shareContainer.querySelector('.share-box');

  shareIcon.classList.toggle('active');
  shareBox.classList.toggle('hidden');
}

// Audio Time Tracker
function timeUpdate() {
  let audio = this;
  let podcastContainer = this.parentNode;
  let playhead = podcastContainer.querySelector('.playhead')
  let playPercent = timelineWidth * (audio.currentTime / duration);
  playhead.style.marginLeft = playPercent + "px";
}

// Moves playhead as user drags
function moveplayhead(e) {
  // - 50 removes 48px from width as a crapshoot fix
  let newMargLeft = e.pageX - timeline.offsetLeft - 50;
  if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
    playhead.style.marginLeft = newMargLeft + "px";
  }
  if (newMargLeft < 0) {
    playhead.style.marginLeft = "0px";
  }
  if (newMargLeft > timelineWidth) {
    playhead.style.marginLeft = timelineWidth + "px";
  }
}

// returns click as decimal (.77) of the total timelineWidth
function clickPercent(e) {
  return (e.pageX - timeline.offsetLeft - 50) / timelineWidth;
}

// wiring for binding of each host-bio
for (let i = 0; i < hostImages.length; i++) {
  bindHostBio(hostImages[i]);
}

// wiring for binding of each podcast
for (let i = 0; i < podcasts.length; i++) {
  bindPodcast(podcasts[i]);
}
