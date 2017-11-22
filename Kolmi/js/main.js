

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
