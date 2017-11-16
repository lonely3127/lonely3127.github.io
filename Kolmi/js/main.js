$(window).load(function() {
    setTimeout(function() {
        $(".loader").delay(100).fadeOut().remove();


        $(".spincrement").spincrement({
            from: 0, // Стартовое число
            to: false, // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
            decimalPlaces: 0, // Сколько знаков оставлять после запятой
            decimalPoint: ".", // Разделитель десятичной части числа
            thousandSeparator: " ", // Разделитель тыcячных
            duration: 5000 // Продолжительность анимации в миллисекундах
        });
    }, 2500);
});

var lineDrawing = anime({
    targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 450 },
    direction: 'alternate',
    loop: true
});

$(function() {

    // Default
    // jQuery.scrollSpeed(100, 800);

    // Custom Easing
    jQuery.scrollSpeed(100, 800, 'easeOutCubic');

});