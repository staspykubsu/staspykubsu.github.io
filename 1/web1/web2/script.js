document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function(){
        $('.slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            dots: true,
            prevArrow: '<img class="slider-arrows slider-arrows__next" src="images/up-arrow.png">',
            nextArrow: '<img class="slider-arrows slider-arrows__prev" src="images/up-arrow.png">',
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    centerMode: false,
                  }
                },
                {
                  breakpoint: 620,
                  settings: {
                    slidesToShow: 1,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
      });
  })