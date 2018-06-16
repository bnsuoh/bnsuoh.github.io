$(document).ready(function(){
    $("#head-frame").load("head.html");
});


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
    }  // End if
  });
});