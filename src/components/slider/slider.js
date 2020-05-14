class Slider {
  constructor(slider) {
    this.slider = slider;
    this.init();
  }

  init() {
    this.selectProperties();
    this.setListeners();
    this.show(0);
  }

  selectProperties() {
    this.slides = this.slider.querySelectorAll('.slider__item');
    this.controls = this.slider.querySelectorAll('.slider__control');
    this.dots = this.slider.querySelectorAll('.slider__dot');
    this.activeIndex = 0;
    this.lastIndex = this.slides.length - 1;
  }

  setListeners() {
    if (this.dots.length) {
      this.dots.forEach(dot => {
        dot.addEventListener('click', (e) => this.handleDotClick(e.target))
      });
    }

    if (this.controls.length) {
      this.controls.forEach(control => {
        control.addEventListener('click', (e) => this.handleControlClick(e.target))
      });
    }
  }

  show(activeIndex) {
    //Show active slide
    this.slides.forEach(slide => slide.classList.remove('slider__item--active'));
    this.slides[activeIndex].classList.add('slider__item--active');
    //Show active dot
    if (this.dots.length) {
      this.dots.forEach(dot => dot.classList.remove('slider__dot--active'));
      this.dots[activeIndex].classList.add('slider__dot--active')
    }
  }

  handleControlClick(control) {
    if (control.classList.contains('slider__control--prev')) {
      (this.activeIndex === 0)
        ? this.activeIndex = this.lastIndex
        : this.activeIndex--;
    } else {
      (this.activeIndex === this.lastIndex)
        ? this.activeIndex = 0
        : this.activeIndex++;
    }
    this.show(this.activeIndex);
  }

  handleDotClick(dot) {
    this.activeIndex = +dot.dataset.number;
    this.show(this.activeIndex)
  }
}

const sliders = document.querySelectorAll('.js-slider');
sliders.forEach(slider => new Slider(slider));
