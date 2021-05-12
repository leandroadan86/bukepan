var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("myslides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); 
}


function accion() { 
 var ancla = document.getElementsByClassName('nav-enlace');
 for(var i = 0; i < ancla.length; i++){
   ancla[i].classList.toggle('desaparece');
 } }