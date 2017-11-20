$(window).load(function() {
    setTimeout(function() {
        $(".loader").fadeOut();
        $("html").fadeIn();

        UIkit.util.on('.uk-slideshow', 'itemshown', function() {
            $(".spincrement").spincrement({
                from: 0, // Стартовое число
                to: false, // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
                decimalPlaces: 0, // Сколько знаков оставлять после запятой
                decimalPoint: ".", // Разделитель десятичной части числа
                thousandSeparator: " ", // Разделитель тыcячных
                duration: 2000, // Продолжительность анимации в миллисекундах
                leeway: 0, // погрешность продолжительности анимации в процентах
                easing: "easeOutCirc",
            });
        });

        $(".spincrement").spincrement({
            from: 0, // Стартовое число
            to: false, // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
            decimalPlaces: 0, // Сколько знаков оставлять после запятой
            decimalPoint: ".", // Разделитель десятичной части числа
            thousandSeparator: " ", // Разделитель тыcячных
            duration: 2000, // Продолжительность анимации в миллисекундах
            leeway: 0, // погрешность продолжительности анимации в процентах
            easing: "easeOutCirc",
        });

    }, 2500);
});

// отрисовка линий svg-лого
var lineDrawing = anime({
    targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 450 },
    direction: 'alternate',
    loop: true
});

// плавный скроллинг
$(function() {
    // Default
    // jQuery.scrollSpeed(100, 800);

    // Custom Easing
    jQuery.scrollSpeed(100, 800, 'easeOutCubic');
});

// слайдер логотипов
$(document).ready(function() {
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});