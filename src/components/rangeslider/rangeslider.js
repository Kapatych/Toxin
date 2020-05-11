import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

class RangeSlider {
  constructor(handlesSlider , properties) {
    noUiSlider.create(handlesSlider , properties)
  }
}

const rangeSliders = document.querySelectorAll('.js-rangeslider');

rangeSliders.forEach(rangeSlider => {
  const handlesSlider = rangeSlider.querySelector('.rangeslider__input');
  const data = handlesSlider.dataset;
  const rangeValue = rangeSlider.querySelector('.rangeslider__value');

  new RangeSlider(handlesSlider, {
    start: [data.start, data.end],
    step: +data.step,
    connect: true,
    range: {
      'min': +data.min,
      'max': +data.max
    },
    format: wNumb({
      decimals: 0,
      thousand: ' ',
      suffix: ` ${data.suffix}`
    })
  });

  handlesSlider.noUiSlider.on('update', values => rangeValue.innerHTML = values.join(' - '));
});

