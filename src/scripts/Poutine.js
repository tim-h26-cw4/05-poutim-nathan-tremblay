export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.button');
    this.selectedType = '';
    this.init();
  }

  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    //    for (let i = 0; i < this.types.length; i++) {
    //      const type = this.types[i];
    //      type.classList.remove('is-active');
    //   }

    if (event.currentTarget.classList.contains('is-active')) {
      event.currentTarget.classList.remove('is-active');
      this.selectedType = '';
      this.removePhoto();
    } else {
      event.currentTarget.classList.add('is-active');
      this.selectedType = event.currentTarget.innerText;
      this.updatePhoto();
    }
  }

  updatePhoto() {
    const image = this.element.querySelector('.poutine__image');
    image.classList.add('is-active');
    image.setAttribute('src', `assets/images/${this.selectedType}.png`);
  }

  removePhoto() {
    const image = this.element.querySelector('.poutine__image');
    image.classList.remove('is-active');
    image.setAttribute('src', `assets/images/poutine.png`);
  }
}
