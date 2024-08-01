let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  //phone size menu onclick
  $("#menu-id").click(function (e) {
    e.preventDefault();
    $(".navgition").toggleClass("reset-left");
    $("body").toggleClass("overflow");
  });
  $(".nav-head .close-menu").click(function () {
    $(".navgition").removeClass("reset-left");
    $("body").removeClass("overflow");
  });

  //fixed nav3
  $stickyNav = $(".top-header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav", 500);
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
    }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html").css("scroll-behavior", "unset");

    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000,
      "swing"
    );
    setTimeout(() => {
      $("html").css("scroll-behavior", "smooth");
    }, 1000);
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
  // for counter //
  const sectionExists =
    document.getElementsByClassName("counter-cont").length > 0;

  if (sectionExists) {
    var a = 0;
    function countFunction() {
      $(".counter-num").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 2000,
            easing: "swing",
            step: function () {
              if (this.countNum < 10) {
                $this.text("0" + Math.floor(this.countNum));
              } else {
                $this.text(Math.floor(this.countNum));
              }
            },
            complete: function () {
              if (this.countNum < 10) {
                $this.text("0" + this.countNum);
              } else {
                $this.text(this.countNum);
              }
              //alert('finished');
            },
          }
        );
      });
      a = 1;
    }
    if ($(window).width() <= 767) {
    }
    $(window).scroll(function () {
      var oTop = $(".counter-cont").offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        countFunction();
      }
    });
    var oTop = $(".counter-cont").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      countFunction();
    }
  } else {
  }

  // end counter //

  const selectExists =
    document.getElementsByClassName("select_input").length > 0;
  if (selectExists) {
    const $select2 = $(".select_input");
    $select2.select2();
  }
  const dateExists = document.getElementsByClassName("selector").length > 0;
  if (dateExists) {
    $(".selector").flatpickr({});
  }
  
  ////////////////add swiper carsoul to class services////////////////////////////////
  if ($(window).width() < 991) {
    $(".country-swiper").addClass("swiper");
    $(".country-container").addClass("swiper-wrapper");
    $(".country-container .country-item").addClass("swiper-slide");
    var countrySwiper = new Swiper(".country-section .swiper", {
      // loop: true,
      autoplay: true,
      breakpoints: {
        0: {
          slidesPerView: 1.4,
          spaceBetween: 22,
        },
        767: {
          slidesPerView: 2.2,
          spaceBetween: 22,
        },
        992: {
          slidesPerView: 1.2,
          spaceBetween: 22,
        },
        1199: {
          slidesPerView: 3,
          spaceBetween: 22,
        },
      },
    });
  }
  //otp code animation
  $(".otp-form *:input[type!=hidden]:first").focus();
  let otp_fields = $(".otp-form .otp-field"),
    otp_value_field = $(".otp-form .otp-value");
  otp_fields
    .on("input", function (e) {
      $(this).val(
        $(this)
          .val()
          .replace(/[^0-9]/g, "")
      );
      let opt_value = "";
      otp_fields.each(function () {
        let field_value = $(this).val();
        if (field_value != "") opt_value += field_value;
      });
      otp_value_field.val(opt_value);
    })
    .on("keyup", function (e) {
      let key = e.keyCode || e.charCode;
      if (key == 8 || key == 46 || key == 37 || key == 40) {
        // Backspace or Delete or Left Arrow or Down Arrow
        $(this).prev().focus();
      } else if (key == 38 || key == 39 || $(this).val() != "") {
        // Right Arrow or Top Arrow or Value not empty
        $(this).next().focus();
      }
    })
    .on("paste", function (e) {
      let paste_data = e.originalEvent.clipboardData.getData("text");
      let paste_data_splitted = paste_data.split("");
      $.each(paste_data_splitted, function (index, value) {
        otp_fields.eq(index).val(value);
      });
    });
  ///////// ** person-card-slider** /////////
  var specialsO = new Swiper(".person-card-slider .swiper", {
    // loop: true,
    autoplay: true,
    preloadImages: false,
    direction: "vertical",
    watchSlidesVisibility: true,
    height: 509,
    slidesPerView: 3,
    spaceBetween: -140,
    pagination: {
      el: ".img-bg-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".img-bg-slider .swiper-btn-next",
      prevEl: ".img-bg-slider .swiper-btn-prev",
    },
    // breakpoints: {
    //   0: {
    //     slidesPerView: 3,
    //     spaceBetween: -200,
    //     height: 350,
    //   },
    //   767: {
    //     slidesPerView: 2,
    //     spaceBetween: -100,
    //   },
    //   992: {
    //     slidesPerView: 3,
    //     spaceBetween: -140,
    //     height: 509,
    //   },
    // },
  });

  lazyLoad();
});
function lazyLoad() {
  const images = document.querySelectorAll(".lazy-img");

  const optionsLazyLoad = {
    //  rootMargin: '-50px',
    // threshold: 1
  };

  const imageObserver = new IntersectionObserver(function (enteries) {
    enteries.forEach(function (entery) {
      if (!entery.isIntersecting) {
        return;
      } else {
        preloadImage(entery.target);
        imageObserver.unobserve(entery.target);
      }
    });
  }, optionsLazyLoad);

  images.forEach(function (image) {
    imageObserver.observe(image);
  });
}

function preloadImage(img) {
  img.src = img.getAttribute("data-src");
  img.onload = function () {
    img.parentElement.classList.remove("loading-img");
    img.parentElement.classList.add("loaded-img");
  };
}

//form wizard
function activeStep(ele, stepId) {
  var nextStep = "#step_" + stepId;
  $(".step").not(nextStep).hide();
  $(nextStep).show();
  if ($(ele).hasClass("btn-irv")) {
    var activeHead = stepId;
    var activeStep = "#activeStep-" + activeHead;
    $(activeStep).addClass("active");
    $(".progressbar li").not(activeStep).removeClass("active");
  }
}
//showPass
function showPass(showPass) {
  sibling = showPass.parentElement.nextElementSibling;
  // sibling.focus();
  if (showPass.checked) {
    sibling.setAttribute("type", "text");
    $(".password-show i").addClass("active");
  } else {
    sibling.setAttribute("type", "password");
    $(".password-show i").removeClass("active");
  }
}
$("#imageInput").on("change", function () {
  $input = $(this);
  if ($input.val().length > 0) {
    fileReader = new FileReader();
    fileReader.onload = function (data) {
      $(".image-preview").attr("src", data.target.result);
    };
    fileReader.readAsDataURL($input.prop("files")[0]);
  }
});
