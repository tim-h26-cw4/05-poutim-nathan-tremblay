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
    const boutonCommander = this.element.querySelector('.button-secondary');
    boutonCommander.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    let nbPoutine = 0;
    for (let i = 0; i < this.menu.length; i++) {
      const menu = this.menu[i];
      if (menu.selectedType != '') {
        nbPoutine += 1;
      }
    }
    const text = document.createElement('p');
    text.innerText = `Nombre total de poutine(s) : ${nbPoutine}`;
    this.container.innerHTML = '';
    //this.container.appendChild(text);
    this.createHeader();
    this.createListItem();
    this.createFooter();
  }

  createHeader() {
    const titre = document.createElement('h2');
    titre.innerText = 'Voici le résumé de votre commande :';
    this.container.appendChild(titre);
  }

  createListItem() {
    this.nbList = 0;
    for (let i = 0; i < this.menu.length; i++) {
      const menu = this.menu[i];
      if (menu.selectedType != '') {
        this.nbList += 1;
        const list = document.createElement('p');
        list.innerText += `Poutine #${this.nbList} - ${menu.selectedType}`;
        this.container.appendChild(list);
      }
    }
  }

  createFooter() {
    const footer = document.createElement('p');
    footer.innerText = `Nombre total de poutine(s): ${this.nbList}`;
    this.container.appendChild(footer);
  }
}
