window.onload = function () {
  setTimeout(() => window.scrollTo(0, 0), 2); // 返回页面顶部
};
var auto, data, next, prve, winScrollTop, aboutTri, numTri;
var winHeight = $(window).height();
// gui arr
var guiArr = document.getElementById("guide_arrow");
// num
var numMain = document.getElementById("num_main");
var numHeight = numMain.offsetTop;
// about
var aboutMain = document.getElementById("about_main");
var aboutHeight = aboutMain.offsetTop;
// one
var oneMain = document.getElementById("main_one");
var oneHeight = oneMain.offsetTop;
// two
var twoMain = document.getElementById("main_two");
var twoHeight = twoMain.offsetTop;
// three
var threeMain = document.getElementById("main_three");
var threeHeight = threeMain.offsetTop;
// four
var fourMain = document.getElementById("main_four");
var fourHeight = fourMain.offsetTop;
// five
var fiveMain = document.getElementById("main_five");
var fiveHeight = fiveMain.offsetTop;
//winTri
var numWinTri = winHeight / 2 + winHeight / 8;
var aboutWinTri = winHeight / 2 + winHeight / 8;
var oneWinTri = winHeight / 2;
var twoWinTri = winHeight / 2;
var threeWinTri = winHeight / 2;
var fourWinTri = winHeight / 2;
var fiveWinTri = winHeight / 2;
// main_img_tri
var ImgTri = winHeight / 2 + winHeight / 8;
//setIntval
function slideAuto() {
  auto = setInterval(slideNext, 6000);
}
function slideStop() {
  clearInterval(auto);
}
//slide next
function slideNext() {
  data = document.querySelector(".img_box");
  next = (data.getAttribute("data-cur") % 6) + 1;
  data.setAttribute("data-next", next);
  data.setAttribute("data-prve", 0);
  data.setAttribute("data-cur", next);
  document.getElementById("slide_number").innerHTML = "0" + next;
}
//slide prve
function slidePrve() {
  data = document.querySelector(".img_box");
  prve = data.getAttribute("data-cur") - (1 % 6);
  if (prve === 0) {
    prve = 6;
  }
  data.setAttribute("data-prve", prve);
  data.setAttribute("data-next", 0);
  data.setAttribute("data-cur", prve);
  document.getElementById("slide_number").innerHTML = "0" + prve;
}

//trigger
$(document).ready(function () {
  $(".next_btn_box").click(function () {
    slideNext();
    slideStop();
    slideAuto();
  });
  $(".prve_btn_box").click(function () {
    slidePrve();
    slideStop();
    slideAuto();
  });
  slideAuto();
  $(
    ".txt_anime1,.txt_anime2,.txt_anime3,.txt_anime4,.txt_anime5,.txt_anime6,.txt_anime4_1"
  ).addClass("bottom_to_top");
  $(".txt_anime6").addClass("opa_full");

  //scroll
  $(document).scroll(function () {
    winScrollTop = $(document).scrollTop();
    if (winScrollTop !== 0) {
      $("#nav").addClass("change_nav");
    } else {
      $("#nav").removeClass("change_nav");
    }
    // tri height
    numTri = numHeight - winScrollTop;
    aboutTri = aboutHeight - winScrollTop;
    oneTri = oneHeight - winScrollTop;
    twoTri = twoHeight - winScrollTop;
    threeTri = threeHeight - winScrollTop;
    fourTri = fourHeight - winScrollTop;
    fiveTri = fiveHeight - winScrollTop;
    // num txt
    if (numTri - numWinTri <= 0 && numTri - numWinTri > -100) {
      $(".title_txt,.num_txt_anime,.num_icon_anime").addClass("bottom_to_top2");
    }
    // about txt
    if (aboutTri - aboutWinTri <= 0 && aboutTri - aboutWinTri > -100) {
      $(".about_txt_anime").addClass("bottom_to_top2");
    }
    // one img + txt
    if (oneTri - ImgTri <= 0 && oneTri - ImgTri > -100) {
      $(".main_one_img").addClass("left_to_right");
    }
    if (oneTri - oneWinTri <= 0 && oneTri - oneWinTri > -100) {
      $(".one_txt_anime").addClass("bottom_to_top2");
    }
    // two img + txt
    if (twoTri - ImgTri <= 0 && twoTri - ImgTri > -100) {
      $(".main_two_img").addClass("right_to_left");
    }
    if (twoTri - twoWinTri <= 0 && twoTri - twoWinTri > -100) {
      $(".two_txt_anime").addClass("bottom_to_top2");
    }
    // three img + txt
    if (threeTri - ImgTri <= 0 && threeTri - ImgTri > -100) {
      $(".main_three_img").addClass("left_to_right");
    }
    if (threeTri - threeWinTri <= 0 && threeTri - threeWinTri > -100) {
      $(".three_txt_anime").addClass("bottom_to_top2");
    }
    // four img + txt
    if (fourTri - ImgTri <= 0 && fourTri - ImgTri > -100) {
      $(".main_four_img").addClass("left_to_right");
    }
    if (fourTri - fourWinTri <= 0 && fourTri - fourWinTri > -100) {
      $(".four_txt_anime").addClass("bottom_to_top2");
    }
    // five img + txt
    if (fiveTri - ImgTri <= 0 && fiveTri - ImgTri > -100) {
      $(".main_five_img").addClass("left_to_right");
    }
    if (fiveTri - fiveWinTri <= 0 && fiveTri - fiveWinTri > -100) {
      $(".five_txt_anime").addClass("bottom_to_top2");
    }
  });
  var asd = 0;
  var winScrollHeight;
  $(document).on("mousewheel", function (event) {
    console.log(event);
    const winScrollHeight =
      $(window).scrollTop() - event.originalEvent.wheelDeltaY * 0.2;
    // console.log(winScrollHeight);
    $(window).scrollTop(winScrollHeight);
    // asd = winScrollHeight / 2;
    // event.preventDefault();
  });

  {
    function preventDefault(e) {
      e.preventDefault();
    }

    // modern Chrome requires { passive: false } when adding event
    var supportsPassive = false;
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: function () {
            supportsPassive = true;
          },
        })
      );
    } catch (e) {}

    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent =
      "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  }
});
