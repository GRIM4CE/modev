'use strict';

var podcasts = document.querySelectorAll('.podcast-container');
var podcastsPlayButtons = document.querySelectorAll('.play-button');
var allAudio = document.querySelectorAll('audio');

// Control vars
var timeline = document.querySelector('.timeline');
var playhead = document.querySelector('.playhead');
var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
var duration = void 0;
var onplayhead = false;

/* Podcasts Setup */
// Bind Podcast
var bindPodcast = function bindPodcast(podcast) {
  var playButton = podcast.querySelector('.play-button');
  var volumeButton = podcast.querySelector('.volume-button');
  var shareButton = podcast.querySelector('.share-button');
  var audio = podcast.querySelector('audio');
  var timeline = podcast.querySelector('.timeline');

  // Audio Timeline event listeners
  audio.addEventListener("timeupdate", timeUpdate);
  audio.addEventListener("canplaythrough", function () {
    duration = audio.duration;
  }, false);

  //Makes timeline clickable
  timeline.addEventListener("click", function (event) {
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
};

// Play Audio Files
var playAudio = function playAudio() {
  var podcastContainer = this.parentNode;
  var playButton = this;
  var playIcon = playButton.querySelector('i');
  var audio = podcastContainer.querySelector('audio');

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
};

// Reset Audio Files
var resetAudio = function resetAudio() {
  for (var i = 0; i < podcasts.length; i++) {
    var audio = podcasts[i].querySelector('audio');
    var playButton = podcasts[i].querySelector('.play-button');
    var playIcon = playButton.querySelector('i');

    audio.pause();
    playIcon.className = "fa fa-play";
    playButton.classList.remove('active');
  }
};

// Toggle Volume of Audio Files
var toggleVolume = function toggleVolume() {
  var volumeIcon = this;
  var podcastContainer = this.parentNode.parentNode;
  var audio = podcastContainer.querySelector('audio');

  if (audio.muted) {
    audio.muted = false;
    volumeIcon.className = "fa fa-volume-up volume-button";
  } else {
    audio.muted = true;
    volumeIcon.className = "fa fa-volume-off volume-button";
  }
};

// Toggle Share Buttons
var toggleShareButtons = function toggleShareButtons() {
  var shareIcon = this;
  var shareContainer = this.parentNode;
  var shareBox = shareContainer.querySelector('.share-box');

  shareIcon.classList.toggle('active');
  shareBox.classList.toggle('hidden');
};

// Audio Time Tracker
function timeUpdate() {
  var audio = this;
  var podcastContainer = this.parentNode;
  var playhead = podcastContainer.querySelector('.playhead');
  var playPercent = timelineWidth * (audio.currentTime / duration);
  playhead.style.marginLeft = playPercent + "px";
}

// Moves playhead as user drags
function moveplayhead(e) {
  // - 50 removes 48px from width as a crapshoot fix
  var newMargLeft = e.pageX - timeline.offsetLeft - 50;
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

// wiring for binding of each podcast
for (var i = 0; i < podcasts.length; i++) {
  bindPodcast(podcasts[i]);
}
