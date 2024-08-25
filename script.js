let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+ id + ' ]').classList.add('active');
            })
        }
    })
}



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// If you want to update content dynamically, here's a simple example
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.querySelector("home-content").textContent =
        "Here’s something new!";
    }, 5000);
  });
  function changePage(url) {
    window.open(url, "_blank");
  }
  document.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".navbar a");
  
    sections.forEach((section) => {
      let top = section.offsetTop;
      let height = section.clientHeight;
      let id = section.getAttribute("id");
  
      if (
        window.scrollY >= top - height / 3 &&
        window.scrollY < top + height - height / 3
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
          }
        });
      }
    });
  });
  
  function adjustFontSize() {
    const width = window.innerWidth;
    if (width < 768) {
      document.body.style.fontSize = "14px"; // Smaller font size for mobile
    } else {
      document.body.style.fontSize = "16px"; // Default font size for larger screens
    }
  }
  
  // Run function on page load and window resize
  window.addEventListener("load", adjustFontSize);
  window.addEventListener("resize", adjustFontSize);
  
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  
  hamburger.addEventListener('click', () => {
      navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
  });
  
  

  document.getElementById('menu-icon').addEventListener('click',function (){
    const navLinks = document.getElementById('nav-links')
    navLinks.classList.toggle('show')
    document.getElementById('hamburger').classList.toggle('bx-x')
    document.getElementById('nav-links').classList.toggle('hide')

  })
  
  // script.js
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  function checkVisibility() {
      const windowHeight = window.innerHeight;
      reveals.forEach(reveal => {
          const revealTop = reveal.getBoundingClientRect().top;
          if (revealTop < windowHeight - 100) {
              reveal.classList.add('visible');
          } else {
              reveal.classList.remove('visible');
          }
      });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Initial check
});