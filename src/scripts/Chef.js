import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.chef__order');
    this.init();
  }

  init() {
    const poutines = this.element.querySelectorAll('.poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }
    const boutonCommander = document.querySelectorAll('.button-secondary');
    for (let i = 0; i < boutonCommander.length; i++) {
      const bouton = boutonCommander[i];
      bouton.addEventListener('click', this.sendOrder);
    }
  }

  sendOrder() {
    console.log('allo');
  }
}
