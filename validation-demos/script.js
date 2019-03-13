document.querySelector('form').addEventListener('submit', function (mozEvent) {
    var event = mozEvent || window.event;
    event.preventDefault();
    var invalid = this['event-name'].value.trim() === '';
    document.title = invalid ? document.title.replace(/^(?!Error: )(.*)/, 'Error: $1') : document.title.replace(/^Error: /, '');
    document.querySelector('.error-summary').hidden = !invalid;
    invalid || document.querySelector('.form-group').classList.remove('form-group--error');
    invalid && document.querySelector('.form-group').classList.add('form-group--error');
    document.querySelector('#event-name-error').hidden = !invalid;
    this['event-name'].setAttribute('aria-describedBy', invalid ? 'event-name-error' : 'event-name-hint');
    location.assign('#main-content');
});
