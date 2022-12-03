// SCROLL ANIMATIONS FOR INDIVIDUAL ELEMENTS
// code based on: https://css-tricks.com/scroll-triggered-animation-vanilla-javascript/

// function to gather specific element from the DOM and call addObserver()
function scrollTrigger(selector, options = {}) {
    let els = document.querySelectorAll(selector);
    els = Array.from(els);
    els.forEach(el => {
        addObserver(el, options);
    })
}

// function adds 'active' class to selected element
// 'active' class is given animation styles in css files
function addObserver(el) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        })
    })

    observer.observe(el);
}

// call scroll trigger for individual elements, each has their own animation style from css files
scrollTrigger('.image-container', {rootMargin: '-200px'});
scrollTrigger('.homepage-banner-text', {rootMargin: '-200px'});
scrollTrigger('.image-row', {rootMargin: '-200px'});
scrollTrigger('.course-details-section', {rootMargin: '-200px'});






// CODE FOR FLOATING MENU BANNER

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementByClassName("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}