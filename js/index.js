$(document).ready(
    function () {
        if($('.bbb_viewed_slider').length) {
            var viewedSlider = $('.bbb_viewed_slider');

            viewedSlider.owlCarousel(
                {
                    loop: true,
                    margin: 20,
                    autoplay: true,
                    autoplayTimeout: 3500,
                    nav: false,
                    dots: false,
                    responsive: { 0:{items:1}, 575:{items:2}, 768:{items:3}, 991:{ items: 4 }, 1024: {items: 4} }
                }
            );
        }
    }
);