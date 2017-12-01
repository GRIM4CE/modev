/* @flow */
'use strict';

class Modal {
  constructor() {
    this.body = document.querySelector('body');
    this.modalOpenButton = document.querySelectorAll('.modal-open-button');
    this.modalCloseButton = document.querySelectorAll('.modal-close-button');
    this.form = document.querySelectorAll('.form-container');
    this.bindButtons();
  }

  activateModal(regButton) {
    let formId = regButton.getAttribute('data-form');

    this.body.style.overflow = 'hidden';
    for(let i = 0; i < this.form.length; i++) {
      if (this.form[i].getAttribute('data-form') === formId) {
        this.form[i].setAttribute('data-state', 'active');
      }
    }
  }

  deactivateModal() {
    this.body.style.overflow = 'auto';
    for(let i = 0; i < this.form.length; i++) {
      this.form[i].setAttribute('data-state', 'inactive');
    }
  }

  bindButtons() {
    for(let i = 0; i < this.modalOpenButton.length; i++) {
      this.modalOpenButton[i].addEventListener('click', this.activateModal.bind(this,
      this.modalOpenButton[i]));
    }
    for(let i = 0; i < this.modalCloseButton.length; i++) {
      this.modalCloseButton[i].addEventListener('click', this.deactivateModal.bind(this));
    }
  }
}

export default Modal;
