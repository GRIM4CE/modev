/* @flow */
'use strict';
import Team from './components/team';
import Modal from './components/modal';

function appInit() {
  // Init Team UI
  if (document.querySelectorAll('.team-member-container')) {
    const teamContainers = document.querySelectorAll('.team-member-container');
    for (let i = 0; i < teamContainers.length; i++) {
      new Team(teamContainers[i]);
    }
  }

  // Create Modal
  if (document.querySelector(".form-container")) {
    const modal = new Modal();
  }
}

appInit();
