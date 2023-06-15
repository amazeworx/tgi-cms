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

  $("#mobile-menu-open").click(function (e) {
    e.preventDefault();
    $("#modal-overlay").addClass("open");
    $("#mobile-menu-drawer").addClass("open");
  });

  $("#mobile-menu-close, #modal-overlay").click(function (e) {
    e.preventDefault();
    $("#modal-overlay").removeClass("open");
    $("#mobile-menu-drawer").removeClass("open");
  });

  $("#mobile-menu-items a").click(function (e) {
    $("#modal-overlay").removeClass("open");
    $("#mobile-menu-drawer").removeClass("open");
  });

  // var a = 0;
  // $(window).scroll(function () {
  //   var oTop = $(".stats-grid").offset().top - window.innerHeight;
  //   if (a == 0 && $(window).scrollTop() > oTop) {
  //     $(".counter").each(function () {
  //       var $this = $(this),
  //         countTo = $this.attr("data-number");
  //       $({
  //         countNum: $this.text(),
  //       }).animate(
  //         {
  //           countNum: countTo,
  //         },
  //         {
  //           duration: 850,
  //           easing: "swing",
  //           step: function () {
  //             //$this.text(Math.ceil(this.countNum));
  //             $this.text(Math.ceil(this.countNum).toLocaleString("en"));
  //           },
  //           complete: function () {
  //             //$this.text(Math.ceil(this.countNum));
  //             $this.text(Math.ceil(this.countNum).toLocaleString("en"));
  //             //alert('finished');
  //           },
  //         }
  //       );
  //     });
  //     a = 1;
  //   }
  // });

  $(window).scroll(startCounter);

  function startCounter() {
    let scrollY =
      (window.scrollY || document.documentElement.scrollTop) +
      window.innerHeight;
    let divPos = document.querySelector(".stats-grid").offsetTop;

    if (scrollY > divPos) {
      $(window).off("scroll", startCounter);

      $(".counter").each(function () {
        var $this = $(this);
        jQuery({
          Counter: 0,
        }).animate(
          {
            Counter: $this.text().replace(/,/g, ""),
          },
          {
            duration: 1500,
            easing: "swing",
            step: function () {
              $this.text(commaSeparateNumber(Math.floor(this.Counter)));
            },
            complete: function () {
              $this.text(commaSeparateNumber(this.Counter));
              //alert('finished');
            },
          }
        );
      });

      function commaSeparateNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    }
  }
});
