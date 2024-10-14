
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
const themeToggle =document.querySelector('.theme-toggle-button');
const dropdown = document.getElementById('themeDropdown');


function setTheme(theme){
  document.body.classList.toggle('dark' , theme==='dark');
 
  localStorage.setItem('theme' , theme);
  dropdown.classList.remove('show');
}

const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggle.addEventListener('click' , (event)=>{
  event.stopPropagation();
  dropdown.classList.toggle('show');
})
document.addEventListener('click', (event)=>{
  if(!event.target.matches('.theme-toggle-button')){
    dropdown.classList.remove('show');
  }
});




