$(document).ready(function(){
  $('.myslider').slick({
    "autoplay": true,
    "arrows": false,
    "centerMode": true,
    "mobileFirst": true,
    "centerPadding": '60px',
    "responsive": [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            "centerPadding": '60px',
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            "centerPadding": '60px',
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            "centerPadding": '60px',
          }
      }
    ]
  });
});