var figures = document.querySelectorAll('figure'); //commite cards
var cards = document.querySelectorAll('.card'); //testimonial cards
var slides = document.querySelectorAll('.mySlides'); //slides
var dots = document.querySelectorAll('.dot'); //dots
var menu = document.querySelector('.menu'); //hamburger menu
var navlinkcontainer = document.querySelector('.nav-links'); //nav bar
var navlinks = document.querySelectorAll('.link') //nav links
var up = document.getElementsByClassName('up-arrow'); //scroll to top buton
var cross = document.querySelector('.cross')
let i = 1,
  c = 1,
  s = 1; //  '1' because i have already added active class to one element of each
//c=card; s=slide ;i=for commite animation

// hamburger button working
menu.onclick = mobilenav
cross.onclick = mobilenav
navlinks.forEach((link) => {
  link.onclick = mobilenav
})
//control visibiliy of navigation page
function mobilenav() {
  navlinkcontainer.classList.toggle("flex");
}


//scroll to top fucntion
function uparrow() {
  if (document.documentElement.scrollTop > 200)
    up[0].style.display = "block";
  else
    up[0].style.display = "none";
}


//committe image function
setInterval(setimage, 3000);

function setimage() {
  if (i == figures.length) {
    figures[figures.length - 1].classList.toggle("active");
    i = 0;
  }

  if (i == 0) {
    figures[i].classList.toggle("active");

  } else {
    figures[i - 1].classList.toggle("active");
    figures[i].classList.toggle("active");

  }
  i++;


}

// testimonial card animation
setInterval(setcard, 2000);

function setcard() {
  if (c == cards.length) {
    cards[cards.length - 1].classList.toggle("active");
    c = 0;
  }

  if (c == 0) {
    cards[c].classList.toggle("active");

  } else {
    cards[c - 1].classList.toggle("active");
    cards[c].classList.toggle("active");

  }
  c++;


}

//team animation
// setslides();
setInterval(setslides, 2000);

function setslides() {
  if (s == slides.length) {
    slides[slides.length - 1].classList.toggle("active");
    dots[dots.length - 1].classList.toggle("dot-active");
    s = 0;
  }

  if (s == 0) {
    slides[s].classList.toggle("active");
    dots[s].classList.toggle("dot-active");

  } else {
    slides[s - 1].classList.toggle("active");
    dots[s - 1].classList.toggle("dot-active");
    slides[s].classList.toggle("active");
    dots[s].classList.toggle("dot-active");

  }
  s++;

}