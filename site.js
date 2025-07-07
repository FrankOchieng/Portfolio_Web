
document.addEventListener("DOMContentLoaded",() => {
  // Typed.js subtitle
  
  new Typed('#typed-subtitle', {
    strings: ['Cybersecurity Enthusiast', 'Software Developer', 'API Specialist'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });

  // Dark mode toggle
  document.getElementById("darkToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Scroll reveal
  const revealElements = document.querySelectorAll('.scroll-reveal');
  const revealOnScroll = () => {
    revealElements.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Scroll to top button
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Notes section toggle
  const arrow = document.getElementById("arrow");
  const notesContent = document.getElementById("notesContent");
  if (arrow && notesContent) {
    arrow.addEventListener("click", ()=> {
      notesContent.classList.toggle("collapsed");
      arrow.classList.toggle("rotated");
    });
  }

  const header = document.querySelector('header');
  const content = document.querySelector('.main-content');
  if (header && content) {
      const headerHeight = header.offsetHeight;
      content.style.marginTop = headerHeight + 'px';
  }

  const blueHeader = document.querySelector('.main-header'); // blue header
  const navbar = document.querySelector('.top-navbar'); // green nav bar
  const body = document.querySelector('body');

  if (blueHeader && navbar && body) {
      const totalHeight = blueHeader.offsetHeight + navbar.offsetHeight;
      body.style.paddingTop = totalHeight + 'px';
  }
  
    // Sidebar toggle
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleSidebar");
  if (sidebar && toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

 });
