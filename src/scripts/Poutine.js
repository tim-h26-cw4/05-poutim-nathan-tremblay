export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.button');
    this.selectedType = '';
    this.init();
    console.log(this.types);
  }

  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.classList.remove('is-active');
    }
    this.classList.add('is-active');
  }
}
