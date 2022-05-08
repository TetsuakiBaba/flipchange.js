function flip(_id, _text) {
    let e = document.querySelector(_id);
    e.classList = 'flip-180';
    e.addEventListener('transitionend', function () {
        e.innerHTML = _text;
        e.classList = 'flip';
    });
}