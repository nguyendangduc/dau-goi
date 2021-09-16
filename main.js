window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.querySelector("#sec-1d34").classList.add("nav-sticky")
  } else {
    document.querySelector("#sec-1d34").classList.remove("nav-sticky")
    
  }
}