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
  let listSectionMb = document.querySelectorAll("body section")
  const listItem = document.querySelectorAll("#sec-1d34 nav ul.u-nav-1 li")
  const listItemMb = document.querySelectorAll("#sec-1d34 nav ul.u-nav-2 li")
  console.log(listItem)
  console.log(listSection)

  for(let i = 0; i < listSection.length; i++) {
   if(document.documentElement.scrollTop >= listSection[i].offsetTop - 78 ) {
      listItem.forEach(item => {
        item.classList.remove("active")
      })
      listItem[i].classList.add("active")
    }
      
  }
  for(let i = 0; i < listSectionMb.length; i++) {
    if(document.documentElement.scrollTop >= listSectionMb[i].offsetTop - 78 ) {
       listItemMb.forEach(item => {
         item.classList.remove("active")
       })
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
    $("ul.u-nav-1 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: document.querySelector(".u-section-1").offsetTop - 78 }, 500);

  });
  $("ul.u-nav-1 li:nth-child(2)").click(function () {
    event.preventDefault();
    $("ul.u-nav-1 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-2").offset().top - 78 }, 500);

  });
  $("ul.u-nav-1 li:nth-child(3)").click(function () {
    event.preventDefault();
    $("ul.u-nav-1 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-3").offset().top - 78 }, 500);

  });
  $("ul.u-nav-1 li:nth-child(4)").click(function () {
    event.preventDefault();
    $("ul.u-nav-1 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-4").offset().top - 78 }, 500);

  });
  $("ul.u-nav-1 li:nth-child(5)").click(function () {
    event.preventDefault();
    $("ul.u-nav-1 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-5").offset().top - 78 }, 500);

  });
  $("ul.u-nav-1 li:nth-child(6)").click(function () {
    event.preventDefault();
    $("ul.u-nav-1 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-6").offset().top - 78 }, 500);

  });
  $("ul.u-nav-1 li:nth-child(7)").click(function () {
    event.preventDefault();
    $("ul.u-nav-1 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $("footer").offset().top - 78 }, 500);

  });
  
  // mobile
  $("ul.u-nav-2 li:nth-child(1)").click(function () {
    event.preventDefault();
    $("ul.u-nav-2 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-1").offset().top - 78 }, 500);

  });
  $("ul.u-nav-2 li:nth-child(2)").click(function () {
    event.preventDefault();
    $("ul.u-nav-2 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-2").offset().top - 78 }, 500);

  });
  $("ul.u-nav-2 li:nth-child(3)").click(function () {
    event.preventDefault();
    $("ul.u-nav-2 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-3").offset().top - 78 }, 500);

  });
  $("ul.u-nav-2 li:nth-child(4)").click(function () {
    event.preventDefault();
    $("ul.u-nav-2 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-4").offset().top - 78 }, 500);

  });
  $("ul.u-nav-2 li:nth-child(5)").click(function () {
    event.preventDefault();
    $("ul.u-nav-2 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-5").offset().top - 78 }, 500);

  });
  $("ul.u-nav-2 li:nth-child(6)").click(function () {
    event.preventDefault();
    $("ul.u-nav-2 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $(".u-section-6").offset().top - 78 }, 500);

  });
  $("ul.u-nav-2 li:nth-child(7)").click(function () {
    event.preventDefault();
    $("ul.u-nav-2 li").removeClass("active")
    $(this).addClass("active")
    $('html').animate({ scrollTop: $("footer").offset().top - 78 }, 500);

  });
});
