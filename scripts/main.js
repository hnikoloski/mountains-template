$(function () {
  window.scrollTo(0, 0); // start page from top

  var stickyOffset = $("#masthead").offset().top;

  $(window).scroll(function () {
    var sticky = $("#masthead"),
      scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass("sticky");
    else sticky.removeClass("sticky");
  });

  $("#masthead .main-menu ul li a").on("click", function () {
    $("#masthead .main-menu ul li a").removeClass("active");
    $(this).addClass("active");
    if ($(window).width() < 426) {
      $("#masthead .main-menu").toggleClass("active");
      $("#burger").toggleClass("active");
    }
  });

  // Slick slider
  let prevArrowMark = `
  <button class="slick-prev">
  <i class="fas fa-chevron-left"></i>
  </button>
`;
  let nextArrowMark = `
  <button class="slick-next">
  <i class="fas fa-chevron-right"></i>
  </button>
`;
  $(".slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    variableWidth: true,
    prevArrow: prevArrowMark,
    nextArrow: nextArrowMark,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  });

  // Gallery Grid
  $(".gallery-grid").masonry({
    columnWidth: 33,
    itemSelector: ".grid-item",
    // percentPosition: true,
    gutter: 1,
  });
  if ($(window).width() < 426) {
    if ($(".gallery-grid").length) {
      $(".gallery-grid").masonry("destroy");
    }
  }

  // Move elements
  if ($(window).width() < 426) {
    $(".moveIt").appendTo(".main-menu");
  }
  // Mob Menu
  $("#burger").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $("#masthead .main-menu").toggleClass("active");
  });
  // Form Validate
  let newsletterForm = $(".form-validate");
  let orderForm = $(".form-order-validate");

  if (newsletterForm.length) {
    newsletterForm.validate({
      rules: {
        fullName: {
          required: true,
        },
        phoneNum: {
          required: true,
        },
        newsEmail: {
          required: true,
          email: true,
        },
      },
      messages: {
        fullName: {
          required: "Field can NOT be empty.",
        },
        phoneNum: {
          required: "Field can NOT be empty.",
        },
        newsEmail: {
          required: "Field can NOT be empty.",
          email: "Enter a valid email address.",
        },
      },
    });
  }
  if (orderForm.length) {
    orderForm.validate({
      rules: {
        orderFullName: {
          required: true,
        },
        orderPhone: {
          required: true,
        },
      },
    });
  }
});
