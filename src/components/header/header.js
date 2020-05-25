class Header {
  constructor(header) {
    this.header = header;
    this.init();
  }

  init() {
    this.selectProperties();
    this.setListeners();
  }

  selectProperties() {
    this.burgerButton = this.header.querySelector('.header__burger');
    this.nav = this.header.querySelector('.header__nav');
    this.overlay = this.header.querySelector('.header__overlay');
  }

  setListeners() {
    this.burgerButton.addEventListener('click', () => this.toggleMenu())
  }

  toggleMenu() {
    this.nav.classList.toggle('header__nav--open');
    this.overlay.classList.toggle('header__overlay--active');
    document.body.classList.toggle('hold');
    this.burgerButton.classList.toggle('header__burger--open');
  }
}

const headers = document.querySelectorAll('.js-header');
headers.forEach(header => new Header(header));
