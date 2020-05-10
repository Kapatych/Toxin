import datepicker from 'air-datepicker';

class Dateselector {
  constructor(input, properties) {
    $(input).datepicker({
      ...properties,
      range: true,
      minDate: new Date(),
      clearButton: true,
      offset: 6,
      prevHtml: 'arrow_back',
      nextHtml: 'arrow_forward',
      onShow(inst, animationCompleted) {
        const buttonsContainer = inst.nav.$buttonsContainer;
        if (!animationCompleted) {
          // ONLY when apply-button doesn't exist
          if (buttonsContainer.find('.datepicker--button-apply').html() === undefined) {
            buttonsContainer.append('<span class="datepicker--button-apply">Применить</span>');
            buttonsContainer.find('.datepicker--button-apply').click(function (event) {
              inst.hide()
            });
          }
        }
      }
    })
  }
}

const dateselectors = document.querySelectorAll('.js-dateselector');

dateselectors.forEach(dateselector => {
  const firstInput = dateselector.querySelector('.dateselector__start');

  if (firstInput) {
    const secondInput = dateselector.querySelector('.dateselector__end');
    secondInput.addEventListener('click', () => firstInput.focus());

    new Dateselector(firstInput, {
      onSelect(date) {
        // Split formatted date between 2 inputs
        $(firstInput).val(date.split(',')[0]);
        $(secondInput).val(date.split(',')[1]);
      }
    });
  } else {
    const input = dateselector.querySelector('.dateselector__input');
    new Dateselector(input, {
      dateFormat: 'dd M',
      multipleDatesSeparator: ' - ',
    })
  }
});


