var x;
function tab(){
     x = window.open("https://github.com/didy13/compfirstaid", "", "");
}
function disableDropdown(){
     if(window.innerWidth < 991){
          document.getElementById("dropdown").setAttribute("data-bs-toggle", "dropdown");
     }
}
