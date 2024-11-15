window.addEventListener("load", function(){
   //select all elements you want to animate
   const elements = document.querySelectorAll(".fade-in");

   //add the visible class to each element to trigger the css transition
   elements.forEach((element, index) => {
      this.setTimeout(() => {
         element.classList.add("visible");
      }, index*100) // delay for staggered effect
   });
});


window.addEventListener("load", function() {
   const letters = document.querySelectorAll(".name-letter");
   letters.forEach(letter => {
     letter.classList.add("visible");
   });
 });
 

 document.addEventListener('scroll', () => {
   document.documentElement.style.setProperty('--scrollY', window.scrollY);
});
