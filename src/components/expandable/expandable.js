class Expandable {
  constructor(expandable) {
    this.expandable = expandable;
    this.init()
  }

  init() {
    this.selectProperties();
    this.setListeners();
  }

  selectProperties() {
    this.expandableHeader = this.expandable.querySelector('.expandable__header');
    this.expandableContent = this.expandable.querySelector('.expandable__content');
  }

  setListeners() {
    this.expandableHeader.addEventListener('click', () => this.handleExpandableClick())
  }

  handleExpandableClick() {
    this.expandableHeader.classList.toggle('expandable__header--active');
    this.expandableContent.classList.toggle('expandable__content--active');
  }

}

const expandables = document.querySelectorAll('.js-expandable');
expandables.forEach(expandable => new Expandable(expandable));
