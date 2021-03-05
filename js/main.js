'use strict';

//top button
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//'about section' text animation
var cont = $("#wrap > section");

$(window).scroll(function () {
  var location = $(window).scrollTop();

  cont.each(function () {

    var target = $(this);
    var index = target.index();

    if (location >= cont.eq(1).offset().top - $(window).height() / 3) {
      cont.eq(1).addClass("show");
    } else {
      cont.eq(1).removeClass("show");
    }
    if (location >= cont.eq(1).offset().top + $(window).height() / 3) {
      cont.eq(1).removeClass("show");
    }
  });
});

//slide bar
$(document).ready(function () {
  $(".home").click(function () {
    $('html, body').animate({
      scrollTop: $("#home").offset().top
    }, 100);
  });

  $(".about").click(function () {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 100);
  });

  $(".project").click(function () {
    $('html, body').animate({
      scrollTop: $("#project").offset().top
    }, 100);
  });

  $(".contact").click(function () {
    $('html, body').animate({
      scrollTop: $("#contactandresume").offset().top
    }, 100);
  });
});

//changing position of hamburger on scorll
window.onscroll = function () {
  let hamburger = document.querySelector('#hamburger');
  if (window.pageYOffset > 100) {
    hamburger.classList.add("onscroll");
  } else {
    hamburger.classList.remove("onscroll");
  }
}

//iframe
let iframe1 = document.getElementById('iframe1');
let iframe2 = document.getElementById('iframe2');
let iframe3 = document.getElementById('iframe3');
let closebtn = document.getElementById('clostbtn');

function showiframe1() {
  iframe1.style.display = 'block';
  closebtn.style.display = 'block';
}

function showiframe2() {
  iframe2.style.display = 'block';
  closebtn.style.display = 'block';
}

function showiframe3() {
  iframe3.style.display = 'block';
  closebtn.style.display = 'block';
}

function removeiframe() {
  iframe1.style.display = 'none';
  iframe2.style.display = 'none';
  iframe3.style.display = 'none';
  closebtn.style.display = 'none';
}