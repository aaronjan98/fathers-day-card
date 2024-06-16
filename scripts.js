(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      timer = null;

  card.addEventListener('click', function () {
    if (card.classList.contains('open-half') || card.classList.contains('open-fully')) {
      card.setAttribute('class', 'close-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', '');
        timer = null;
      }, 1000);
    } else {
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
      }, 1000);
    }
  });

}());
