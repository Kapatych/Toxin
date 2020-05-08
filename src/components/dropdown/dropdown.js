class Dropdown {

  constructor(dropdown) {
    this.dropdown = dropdown;
    this.init();
  }

  init() {
    this.setProperties();
    this.setState();
    this.setListeners();
  }

  setProperties() {
    this.dropdownBody = this.dropdown.querySelector('.dropdown__body');
    this.dropdownList = this.dropdown.querySelector('.dropdown__list');
    this.dropdownInput = this.dropdown.querySelector('.dropdown__input');
    this.items = this.dropdown.querySelectorAll('.dropdown__item');
    this.buttons = this.dropdown.querySelectorAll('.dropdown__button');
    this.clear = this.dropdown.querySelector('.dropdown__clear');
    this.apply = this.dropdown.querySelector('.dropdown__apply');
  }

  setState() {
    this.state = {};
    this.items.forEach( item =>
      (!this.state[item.dataset.name]) && ( this.state[item.dataset.name] = { count: 0, voc: item.dataset.voc } )
    );
  }

  setListeners() {
    document.addEventListener('click', (e) => this.handleDocumentClick(e.target));
    this.dropdownBody.addEventListener('click', () => this.toggleDropdown());
    this.apply.addEventListener('click', () => this.toggleDropdown());
    this.clear.addEventListener('click', () => this.handleClearButtonClick());

    this.buttons.forEach(button =>
      button.addEventListener('click', (e) => this.handleButtonClick(e.target))
    );
  }

  toggleDropdown() {
    this.dropdownList.classList.toggle('dropdown__list--active');
    this.toggleBodyBorder();
  }

  toggleClearButton(quantity) {
    quantity
      ? this.clear.classList.add('dropdown__clear--active')
      : this.clear.classList.remove('dropdown__clear--active')
  }

  toggleBodyBorder() {
    this.dropdownInput.classList.toggle('dropdown__input--half-border');
  }

  handleButtonClick(button) {
    const dropdownQuantity = button.parentNode.querySelector('.dropdown__item-quantity');
    const label = button.closest('.dropdown__item');

    if (button.classList.contains('dropdown__button--minus')) {
      if (this.state[label.dataset.name].count > 0)
        this.state[label.dataset.name].count -= 1;
    } else {
      this.state[label.dataset.name].count += 1;
    }

    dropdownQuantity.textContent = this.state[label.dataset.name].count;
    this.viewResult();
  }

  handleClearButtonClick() {
    this.items.forEach(item => {
      if (this.state[item.dataset.name]) {
        this.state[item.dataset.name].count = 0;
        item.querySelector('.dropdown__item-quantity').textContent = this.state[item.dataset.name].count;
      }
    });

    this.viewResult()
  }

  handleDocumentClick(target) {
    const list = target === this.dropdownList || this.dropdownList.contains(target);
    const dropdown = target === this.dropdownBody || this.dropdownBody.contains(target);
    if (!list && !dropdown && this.dropdownList.classList.contains('dropdown__list--active')) {
      this.toggleDropdown();
    }
  }

  viewResult() {
    const result = [];

    Object.entries(this.state).map(item => {
      if (item[1].count) {
        const index = Math.round(item[1].count / 2.7);
        const voc = item[1].voc.split(', ');
        const ending = voc[index] || voc[2];
        const value = `${item[1].count} ${ending}`;
        result.push(value)
      }
    });

    this.toggleClearButton(result.length);
    this.dropdownInput.value = result.join(', ')
  }
}

const dropdowns = document.querySelectorAll('.js-dropdown');
dropdowns.forEach(dropdown => new Dropdown(dropdown));
