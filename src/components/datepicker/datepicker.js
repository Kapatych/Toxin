import Litepicker from 'litepicker';

const picker = new Litepicker({
    element: document.querySelector('.datepicker-start'),
    elementEnd: document.querySelector('.datepicker-end'),
    lang: 'ru-RU',
    format: 'DD.MM.YYYY',
    singleMode: false,
    autoApply: false,
    autoRefresh: true,
    minDate: new Date().getTime(),
    useResetBtn: true,
    tooltipText: {
        'one': 'день',
        'few': 'дня',
        'many': 'дней'
    },
    buttonText: {
        apply: 'Применить',
        cancel: '',
        previousMonth: 'arrow_back',
        nextMonth: 'arrow_forward',
        reset: 'Очистить'
    },
});
