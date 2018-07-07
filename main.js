$(function () {

    $('.slick').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                arrows: false
              }
            }
          ]
    });

})