var scrollToTopButton = document.getElementById("scrollToTop");

    // Show the button when the user scrolls down 20px from the top
    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
        scrollToTopButton.style.display = "none";
      }
    };

    // Scroll to the top when the button is clicked
    scrollToTopButton.addEventListener("click", function() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });