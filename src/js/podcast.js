document.addEventListener("DOMContentLoaded", theDOMHasLoaded, false);

var episodes = [{
  name: "Episode 1",
  date: "9/12/16",
  play: "playEpisode1",
  id: "episode1",
  src: "http://traffic.libsyn.com/preview/securitybydesign/SecurityByDesignEpisode1.mp3",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptate repellat laborum dolores quisquam eos accusamus? Ipsa praesentium aspernatur numquam deleniti eveniet, consequatur laborum nesciunt vel aperiam. Fuga, maxime, magni."
}, {
  name: "Episode 2",
  date: "9/12/16",
  play: "playEpisode2",
  id: "episode2",
  src: "http://traffic.libsyn.com/preview/securitybydesign/SecurityByDesignEpisode2.mp3",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptate repellat laborum dolores quisquam eos accusamus? Ipsa praesentium aspernatur numquam deleniti eveniet, consequatur laborum nesciunt vel aperiam. Fuga, maxime, magni."
}, {
  name: "Episode 3",
  date: "9/12/16",
  play: "playEpisode3",
  id: "episode3",
  src: "http://traffic.libsyn.com/preview/securitybydesign/SecurityByDesignEpisode3.mp3",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptate repellat laborum dolores quisquam eos accusamus? Ipsa praesentium aspernatur numquam deleniti eveniet, consequatur laborum nesciunt vel aperiam. Fuga, maxime, magni."
}];

function createAudioElements() {
  episodes.forEach(function(episode) {
    var audioString = "<audio id=\"" + episode.id + "\" class=\"audio\" preload=\"true\"><source src=\"" + episode.src + "\" type=\"audio/mp3\"></audio>";
    $("#audio-players").append(audioString);
  });
}

function createAudioPlayers() {
  episodes.forEach(function(episode) {
    var playerString = "<div class=\"podcast-container\"><div class=\"podcast-info\"><h2 class=\"podcast-title\">" + episode.name + "</h2><h4 class=\"podcast-date\">" + episode.date + "</h4><p>" + episode.description + "</p><audio id=\"" + episode.id + "\" <source src=\"" + episode.src + "\" type=\"audio/mp3\"></audio></div><div class=\"play-filler\"></div><div id=\"" + episode.play + "\" class=\"play-container playActive\"><i class=\"fa fa-play\"></i></div></div>";
    $("#audio-players").append(playerString);
  });
}

function playAudio(episodeId, play) {
  episodes.forEach(function(episode) {
    if (episodeId.paused) {
      episodeId.play();
      play.className = "";
      play.className = "fa fa-pause";
    } else {
      episodeId.pause();
      play.className = "";
      play.className = "fa fa-play";
    }
  });
}

function theDOMHasLoaded(e) {
  createAudioElements();
  createAudioPlayers();
  playAudio();
}


var bios = ["#peteBio", "#danielBio"];

var playingAudio = null;

function bioHover() {
  bios.forEach(function(bio) {

    var id = bio;

    $(id).hover(function() {
      $(id).siblings('.host-bio').removeClass('hidden');
    }, function() {
      $(id).siblings('.host-bio').addClass('hidden');
    });
  });
}
