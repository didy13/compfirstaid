var x;
function tab(){
     x = window.open("https://github.com/didy13/compfirstaid", "", "");
}
function disableDropdown(){
     if(window.innerWidth < 991){
          document.getElementById("dropdown").setAttribute("data-bs-toggle", "dropdown");
     }
}
function highlightFooter() {
     const footer = document.getElementById("footer");
     
     // Reset animation
     footer.style.animation = 'none';
     footer.offsetHeight; // Force reflow (browser redraw)
     
     // Reapply animation
     footer.style.animation = 'highlightFooter 1s ease-in-out';
   }
   