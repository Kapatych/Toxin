class Auth {
  constructor(auth) {
    this.auth = auth;
    this.init()
  }

  init() {
    this.selectProperties();
    this.setListeners();
  }

  selectProperties() {
    this.toggleButtons = this.auth.querySelectorAll('.auth-toggler');
    this.singIn = this.auth.querySelector('.signin');
    this.singUp = this.auth.querySelector('.signup');
    this.url = window.location.search.replace(/\?/, '');
  }

  setListeners() {
    this.toggleButtons.forEach(button =>
      button.addEventListener('click', () => this.handleTogglerClick())
    );

    if (this.url === 'signup') this.handleTogglerClick()
  }

  handleTogglerClick() {
    this.singIn.classList.toggle('auth__signin--active');
    this.singUp.classList.toggle('auth__signup--active');
  }

}
const auths = document.querySelectorAll('.js-auth');
auths.forEach(auth => new Auth(auth));

