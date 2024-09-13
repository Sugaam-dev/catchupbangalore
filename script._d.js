// Javascript for make navbar responsive
let openMenu = document.getElementsByClassName('fa-bars')[0]
let closeMenu = document.getElementsByClassName('fa-times')[0]
let navlinks = document.getElementsByClassName('nav-links')[0]

openMenu.addEventListener('click', ()=>{
    navlinks.style.left = ("0")
});

closeMenu.addEventListener('click', ()=>{
    navlinks.style.left = ("100%")
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.nav-links .dropdown');
    
    if (window.innerWidth <= 768) {
      dropdown.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.classList.toggle('active');
      });
    }
  });


  document.getElementById("year").textContent = new Date().getFullYear();
  document.querySelectorAll('.nav-links .dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function (e) {
       const content = dropdown.querySelector('.dropdown-content');
       const isActive = dropdown.classList.contains('active');
       
       // Toggle active class to show/hide dropdown
       dropdown.classList.toggle('active', !isActive);
 
       // If a dropdown link is clicked, follow the link
       if (e.target.tagName === 'A') {
          const href = e.target.getAttribute('href');
          if (href) {
             window.location.href = href; // navigate to the link
          }
       }
 
       // Stop event propagation
       e.stopPropagation();
    });
 });
 
 // Close dropdown when clicking outside
 document.addEventListener('click', function () {
    document.querySelectorAll('.nav-links .dropdown.active').forEach(dropdown => {
       dropdown.classList.remove('active');
    });
 });
 




