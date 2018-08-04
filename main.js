
// Sticky Navbar
window.onscroll = function() {stickNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.remove("non-sticky")
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("non-sticky")
  }
}

// Smooth Scrolling
$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: "#navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#navbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
});

// // Fade divs
// $(window).on("load",function() {
//   $(window).scroll(function() {
//     var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//     $(".fade").each(function() {
//       /* Check the location of each desired element */
//       var objectBottom = $(this).offset().top + $(this).outerHeight();
//       var objectTop = $(this).offset().top + 20;
      
//       /* If the element is completely within bounds of the window, fade it in */
//       if (objectTop < windowBottom) { //object comes into view (scrolling down)
//         if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
//       }
//     });
//   }).scroll(); //invoke scroll-handler on page-load
// });

// Display navbar on small screen
function toggleNavbar() {
    var x = document.getElementById("navbar");
    
}