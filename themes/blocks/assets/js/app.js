(() => {
  // resources/js/app.js
  jQuery(function($) {
    var shrinkHeader = 100;
    headerShrink();
    $(window).scroll(function() {
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
    $("#mobile-menu-open").click(function(e) {
      e.preventDefault();
      $("#modal-overlay").addClass("open");
      $("#mobile-menu-drawer").addClass("open");
    });
    $("#mobile-menu-close, #modal-overlay").click(function(e) {
      e.preventDefault();
      $("#modal-overlay").removeClass("open");
      $("#mobile-menu-drawer").removeClass("open");
    });
    $("#mobile-menu-items a").click(function(e) {
      $("#modal-overlay").removeClass("open");
      $("#mobile-menu-drawer").removeClass("open");
    });
  });
})();
