//import Litepicker from 'litepicker';
import Datepicker from 'air-datepicker';

// new Litepicker({
//     element: document.querySelector('.datepicker__start'),
//     elementEnd: document.querySelector('.datepicker__end'),
//     lang: 'ru-RU',
//     format: 'DD.MM.YYYY',
//     singleMode: false,
//     autoApply: false,
//     autoRefresh: true,
//     minDate: new Date().getTime(),
//     useResetBtn: true,
//     tooltipText: {
//         'one': 'день',
//         'few': 'дня',
//         'many': 'дней'
//     },
//     buttonText: {
//         apply: 'Применить',
//         cancel: '',
//         previousMonth: 'arrow_back',
//         nextMonth: 'arrow_forward',
//         reset: 'Очистить'
//     },
// });

const datedropdown = document.querySelector('.dateselector');
datedropdown.addEventListener('click', (event) => handleDatedropdownClick(event));

function handleDatedropdownClick(event) {
    if (event.target !== datedropdown) {
        const datedropdownInput = datedropdown.querySelectorAll('.dateselector__input')[0];
        datedropdownInput.focus();
    }
}

const firstInput = document.querySelector('.dateselector__start');
const secondInput = document.querySelector('.dateselector__end');

$(firstInput).datepicker({
    range: true,
    minDate: new Date(),
    clearButton: true,
    offset: 6,
    prevHtml: 'arrow_back',
    nextHtml: 'arrow_forward',
    onSelect(fd) {
        $(firstInput).val(fd.split(',')[0]);
        $(secondInput).val(fd.split(',')[1]);
    },
    onShow(dp, animationCompleted) {
        const buttonsContainer = dp.nav.$buttonsContainer;
        if (!animationCompleted) {
            if (buttonsContainer.find('.datepicker--button-apply').html() === undefined) { /*ONLY when button don't existis*/
                buttonsContainer.append('<span class="datepicker--button-apply">Применить</span>');
                buttonsContainer.find('.datepicker--button-apply').click(function(event) { dp.hide() });
            }
        }
    },
});
