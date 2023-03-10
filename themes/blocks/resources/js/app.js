// import '../css/app.css';

// console.log('test')

jQuery(function ($) {
  //the shrinkHeader variable is where you tell the scroll effect to start.
  var shrinkHeader = 100;
  headerShrink();
  $(window).scroll(function () {
    //console.log(scroll);
    headerShrink();
  });
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
  function headerShrink() {
    var scroll = getCurrentScroll();
    if (scroll >= shrinkHeader) {
      $(".header").addClass("header-shrink");
    } else {
      $(".header").removeClass("header-shrink");
    }
  }
});
