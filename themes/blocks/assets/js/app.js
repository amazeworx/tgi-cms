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
    $(window).scroll(startCounter);
    function startCounter() {
      let scrollY = (window.scrollY || document.documentElement.scrollTop) + window.innerHeight;
      let divPos = document.querySelector(".stats-grid").offsetTop;
      if (scrollY > divPos) {
        let commaSeparateNumber2 = function(num) {
          return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };
        var commaSeparateNumber = commaSeparateNumber2;
        $(window).off("scroll", startCounter);
        $(".counter").each(function() {
          var $this = $(this);
          jQuery({
            Counter: 0
          }).animate(
            {
              Counter: $this.text().replace(/,/g, "")
            },
            {
              duration: 1500,
              easing: "swing",
              step: function() {
                $this.text(commaSeparateNumber2(Math.floor(this.Counter)));
              },
              complete: function() {
                $this.text(commaSeparateNumber2(this.Counter));
              }
            }
          );
        });
      }
    }
  });
})();
