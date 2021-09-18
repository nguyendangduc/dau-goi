window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.querySelector("#sec-1d34").classList.add("nav-sticky")
  } else {
    document.querySelector("#sec-1d34").classList.remove("nav-sticky")

  }
}
$(function () {
  $("ul.u-nav-1 li:nth-child(1)").click(function () {
    event.preventDefault();
    $("ul.u-nav-1 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $("#sec-f23e").offset().top - 78 }, 500);

  });
  $("ul.u-nav-1 li:nth-child(2)").click(function () {
    event.preventDefault();
    $("ul.u-nav-1 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $("#sec-f354").offset().top - 78 }, 500);

  });
  $("ul.u-nav-1 li:nth-child(3)").click(function () {
    event.preventDefault();
    $("ul.u-nav-1 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $("#sec-d77a").offset().top - 78 }, 500);

  });
  $("ul.u-nav-1 li:nth-child(4)").click(function () {
    event.preventDefault();
    $("ul.u-nav-1 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $("#sec-2062").offset().top - 78 }, 500);

  });
  $("ul.u-nav-1 li:nth-child(5)").click(function () {
    event.preventDefault();
    $("ul.u-nav-1 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $("#sec-c064").offset().top - 78 }, 500);

  });
  $("ul.u-nav-1 li:nth-child(6)").click(function () {
    event.preventDefault();
    $("ul.u-nav-1 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $("#sec-e83e").offset().top - 78 }, 500);

  });
  
  // mobile
  $("ul.u-nav-2 li:nth-child(1)").click(function () {
    event.preventDefault();
    $("ul.u-nav-2 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $("#sec-f23e").offset().top - 78 }, 500);

  });
  $("ul.u-nav-2 li:nth-child(2)").click(function () {
    event.preventDefault();
    $("ul.u-nav-2 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $("#sec-f354").offset().top - 78 }, 500);

  });
  $("ul.u-nav-2 li:nth-child(3)").click(function () {
    event.preventDefault();
    $("ul.u-nav-2 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $("#sec-d77a").offset().top - 78 }, 500);

  });
  $("ul.u-nav-2 li:nth-child(4)").click(function () {
    event.preventDefault();
    $("ul.u-nav-2 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $("#sec-2062").offset().top - 78 }, 500);

  });
  $("ul.u-nav-2 li:nth-child(5)").click(function () {
    event.preventDefault();
    $("ul.u-nav-2 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $("#sec-c064").offset().top - 78 }, 500);

  });
  $("ul.u-nav-2 li:nth-child(6)").click(function () {
    event.preventDefault();
    $("ul.u-nav-2 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $("#sec-e83e").offset().top - 78 }, 500);

  });
});