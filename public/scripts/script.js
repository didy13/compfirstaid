var x;
function tab(id){
     switch (id){
          case "github": x = window.open("https://github.com/didy13/compfirstaid", "", "");
          break;
          case "instagram": x = window.open("https://instagram.com/compfirstaid", "", "");
          break;
          case "tiktok": x = window.open("https://tiktok.com", "", "");
          break;
          case "facebook": x = window.open("https://www.facebook.com/people/Comp-First-Aid/61578976426888/", "", "");
          break;
     }
     
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
   