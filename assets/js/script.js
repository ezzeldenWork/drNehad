
$(window).on('load', function() {
  $(".loder_page").fadeOut()
})

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


  $(".opne_icon i").click(function () {
    // opne mobile menu
    $(".header-section .navBox ").addClass("opne_menuBox");
    $(".header-section .navBox ul li").addClass("up-a");
    $(".close-menu").addClass("close-icon");
    $(".overlay").show();
  });
  $(".close-menu i, .overlay").click(function () {
    $(".header-section .navBox ").removeClass("opne_menuBox");
   $(".header-section .navBox ul li").removeClass("up-a");
  $(".close-menu").removeClass("close-icon");
  $(".overlay").hide();
 })




  // end aos
  AOS.init();
})