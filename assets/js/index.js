// Header js 

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header-area');
  const toggleBtn = document.querySelector('.toggle-btn');
  const menu = document.querySelector('.menu');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  
  // Add sticky class on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) { // Change 100 to the scroll position you prefer
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

  // Toggle menu for small screens
  toggleBtn.addEventListener('click', function() {
    menu.classList.toggle('visible');
    toggleBtn.classList.toggle('active');
  });
});


// type writer js 
document.addEventListener("DOMContentLoaded", function () {
  const typewriterText = document.getElementById("typewriter-text");
  const roles = ["Web Developer", "Web Designer", "UI/UX Designer"];
  let roleIndex = 0;
  let charIndex = 0;
  let currentText = "";
  let typingSpeed = 100; // Speed of typing in ms
  let deletingSpeed = 50; // Speed of deleting in ms
  let isDeleting = false;

  function typeWriter() {
    // Add the appropriate class for each role color
    let currentRoleClass = "";

    if (roles[roleIndex] === "Web Developer") {
      currentRoleClass = "developer";
    } else if (roles[roleIndex] === "Web Designer") {
      currentRoleClass = "designer";
    } else if (roles[roleIndex] === "UI/UX Designer") {
      currentRoleClass = "ux-designer";
    }

    // Apply the class to the typewriter text
    typewriterText.className = `typewriter-role ${currentRoleClass}`;

    if (isDeleting) {
      currentText = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
    } else {
      currentText = roles[roleIndex].substring(0, charIndex + 1);
      charIndex++;
    }

    typewriterText.textContent = currentText;

    if (!isDeleting && charIndex === roles[roleIndex].length) {
      setTimeout(() => {
        isDeleting = true;
      }, 1500); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      roleIndex = (roleIndex + 1) % roles.length; // Loop through roles
      isDeleting = false;
    }

    let speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeWriter, speed);
  }

  // Start typing effect
  typeWriter();
});



// isotop 

document.addEventListener('DOMContentLoaded', function () {
  var grid = document.querySelector('.filltering');
  var iso = new Isotope(grid, {
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows',
  });

  // Filter items on button click
  var filters = document.querySelectorAll('.controls .btn');
  filters.forEach((filter) =>
    filter.addEventListener('click', function () {
      var filterValue = this.getAttribute('data-filter');
      iso.arrange({ filter: filterValue });

      // Update active button
      filters.forEach((btn) => btn.classList.remove('active'));
      this.classList.add('active');
    })
  );
});