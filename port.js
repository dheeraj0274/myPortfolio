
document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed(".typing", {
    strings: [
      "Web Developer",
      "App Developer",
      "Chai lover"
    
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
});




window.addEventListener('scroll' ,()=>{
    var header = document.querySelector(".navbar");
    header.classList.toggle("sticky" , window.scrollY > 0);
});




const Checkbox = document.getElementById('check');

const liBtn = document.querySelectorAll('.menu-btn');
liBtn.forEach(atag => {
  atag.addEventListener('click', ()=> {
    Checkbox.checked = false;
  });
});


