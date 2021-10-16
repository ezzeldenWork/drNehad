$(document).ready(function () {
  $(".comment_slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: false,
    adaptiveHeight: true,
    autoplaySpeed: 1700,
  });

  // end aos
  AOS.init();
})