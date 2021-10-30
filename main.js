window.onscroll = function () {
   scrollFunction() 
   updateNavbar()
  };

function scrollFunction() {
  //lenh dau khong dung duoc 
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.querySelector("#sec-1d34").classList.add("nav-sticky")
  } else {
    document.querySelector("#sec-1d34").classList.remove("nav-sticky")

  }
}
function updateNavbar() {
  let listSection = document.querySelectorAll("body section")
  const listItem = document.querySelectorAll("#sec-1d34 nav ul.u-nav-1 li")
  const listItemMb = document.querySelectorAll("#sec-1d34 nav ul.u-nav-2 li")
  console.log(listItem)
  console.log(listSection)

  for(let i = 0; i < listSection.length; i++) {
   if(document.documentElement.scrollTop >= listSection[i].offsetTop -79 ) {
      listItem.forEach(item => {
        item.classList.remove("active")
      })
      listItemMb.forEach(item => {
        item.classList.remove("active")
        
      })
      listItem[i].classList.add("active")
      listItemMb[i].classList.add("active")

    }
      
  }

  if(document.documentElement.scrollTop >= document.querySelector("footer").offsetTop -500) {
    listItem.forEach(item => {
      item.classList.remove("active")
    })
    listItem[listItem.length - 1].classList.add("active")
  }
  if(document.documentElement.scrollTop >= document.querySelector("footer").offsetTop-78) {
    listItemMb.forEach(item => {
      item.classList.remove("active")
    })
    listItemMb[listItem.length - 1].classList.add("active")
  }
}
$(function () {
  $("ul.u-nav-1 li:nth-child(1)").click(function () {
    event.preventDefault();
    // $("ul.u-nav-1 li").removeClass("active")
    // $(this).addClass("active")
    $('html').animate({ scrollTop: document.querySelector(".u-section-1").offsetTop - 78 }, 500);

  });
  $("ul.u-nav-1 li:nth-child(2)").click(function () {
    event.preventDefault();
    // $("ul.u-nav-1 li").removeClass("active")
    // $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-2").offset().top - 78 }, 500);

  });
  $("ul.u-nav-1 li:nth-child(3)").click(function () {
    event.preventDefault();
    // $("ul.u-nav-1 li").removeClass("active")
    // $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-3").offset().top - 78 }, 500);

  });
  $("ul.u-nav-1 li:nth-child(4)").click(function () {
    event.preventDefault();
    // $("ul.u-nav-1 li").removeClass("active")
    // $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-4").offset().top - 78 }, 500);

  });
  $("ul.u-nav-1 li:nth-child(5)").click(function () {
    event.preventDefault();
    // $("ul.u-nav-1 li").removeClass("active")
    // $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-5").offset().top - 78 }, 500);

  });
  $("ul.u-nav-1 li:nth-child(6)").click(function () {
    event.preventDefault();
    // $("ul.u-nav-1 li").removeClass("active")
    // $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-6").offset().top - 78 }, 500);

  });
  $("ul.u-nav-1 li:nth-child(7)").click(function () {
    event.preventDefault();
    // $("ul.u-nav-1 li").removeClass("active")
    // $(this).addClass("active")
    $('html').animate({ scrollTop: $("footer").offset().top - 78 }, 500);

  });
  
  // mobile
  $("ul.u-nav-2 li:nth-child(1)").click(function () {
    event.preventDefault();
    // $("ul.u-nav-2 li").removeClass("active")
    // $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-1").offset().top - 78 }, 500);

  });
  $("ul.u-nav-2 li:nth-child(2)").click(function () {
    event.preventDefault();
    // $("ul.u-nav-2 li").removeClass("active")
    // $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-2").offset().top - 78 }, 500);

  });
  $("ul.u-nav-2 li:nth-child(3)").click(function () {
    event.preventDefault();
    // $("ul.u-nav-2 li").removeClass("active")
    // $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-3").offset().top - 78 }, 500);

  });
  $("ul.u-nav-2 li:nth-child(4)").click(function () {
    event.preventDefault();
    // $("ul.u-nav-2 li").removeClass("active")
    // $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-4").offset().top - 78 }, 500);

  });
  $("ul.u-nav-2 li:nth-child(5)").click(function () {
    event.preventDefault();
    // $("ul.u-nav-2 li").removeClass("active")
    // $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-5").offset().top - 78 }, 500);

  });
  $("ul.u-nav-2 li:nth-child(6)").click(function () {
    event.preventDefault();
    // $("ul.u-nav-2 li").removeClass("active")
    // $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-6").offset().top - 78 }, 500);

  });
  $("ul.u-nav-2 li:nth-child(7)").click(function () {
    event.preventDefault();
    // $("ul.u-nav-2 li").removeClass("active")
    // $(this).addClass("active")
    $('html').animate({ scrollTop: $("footer").offset().top - 78 }, 500);

  });
});




// const showBtn = document.querySelector(".header__menu-btn--show")
// const closeBtn = document.querySelector(".header__menu-btn--close")
// const subMenu = document.querySelector(".header__menu-content")
// const scrollTopBtn = document.querySelector(".f-btn.f-btn-scroll-top")
// const listMenu = document.querySelectorAll(".header__menu-content .content-body ul li a")
// const menu = document.querySelector(".header__menu-content .content-body ul")
// showBtn.addEventListener("click",function(event) {
//     subMenu.classList.add("go-left")


// })
// subMenu.addEventListener("click",function(event) {
//     subMenu.classList.remove("go-left")


// })

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
//     scrollTopBtn.classList.remove("hidden")
//   } else {
//     scrollTopBtn.classList.add("hidden")

//   }
// }

// scrollTopBtn.addEventListener("click",function(event) {   
//   window.scroll({
//     top: 0, 
//     left: 0, 
//     behavior: 'smooth' 
//    });
    
// })

// listMenu.forEach(item => {
//   item.addEventListener("click",function(event) { 
//     event.preventDefault();
//     const idSection = event.target.getAttribute("href");
//     const offset = document.querySelector(idSection).offsetTop - 78
//     window.scroll({
//       top: offset, 
//       left: 0, 
//       behavior: 'smooth' 
//      });
//   })
// })

// menu.addEventListener("click", (e) => {
//   const element = e.target
// event.preventDefault()
//   const idSection = element.getAttribute("href")
//   const offset = document.querySelector(idSection).offsetTop - 0
//   window.scroll({
//     top:offset, 
//     left: 0, 
//     behavior: 'smooth'
//   })
// })



