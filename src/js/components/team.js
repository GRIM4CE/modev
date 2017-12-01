class Team {
  constructor(teamContainer) {
    this.body = document.querySelector('body');
    this.modalOpacity = document.querySelector('.modal-opacity');
    this.teamContainer = teamContainer;
    this.teamModalContainer = this.teamContainer.nextElementSibling;
    this.teamModalClose = this.teamModalContainer.querySelector('.team-member-modal-close')
    this.bindTeamButtons();
  }

  toggleTeamMemberProfile() {
    this.toggleState(this.body, 'inactive', 'active');
    this.toggleState(this.modalOpacity, 'active', 'inactive');
    this.toggleState(this.teamModalContainer, 'active', 'inactive');
  }

  bindTeamButtons() {
    this.teamContainer.addEventListener('click', this.toggleTeamMemberProfile.bind(this));
    this.teamModalClose.addEventListener('click', this.toggleTeamMemberProfile.bind(this));
  }

  toggleState(elem, one, two) {
    elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
  }
}

export default Team;
