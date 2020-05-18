class Review {
  constructor(review) {
    this.review = review;
    this.init()
  }

  init() {
    this.selectProperties();
    this.setListeners()
  }

  selectProperties() {
    this.likeButton = this.review.querySelector('.reviews__likes')
  }

  setListeners() {
    this.likeButton.addEventListener('click', () => this.handleLikeClick())
  }

  handleLikeClick() {
    (this.likeButton.classList.contains('reviews__likes--active'))
      ? this.likeButton.textContent--
      : this.likeButton.textContent++;
    this.likeButton.classList.toggle('reviews__likes--active');
  }
}

const reviews = document.querySelectorAll('.js-review');
reviews.forEach(review => new Review(review));
