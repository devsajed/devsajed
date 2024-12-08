

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
// Wait for the DOM to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function () {
  // Select the grid container
  var grid = document.querySelector('.grid');

  // Initialize Isotope
  var iso = new Isotope(grid, {
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows', // Use fitRows layout
  });

  // Get all filter buttons
  var filters = document.querySelectorAll('.controls .btn');

  // Add event listeners to each filter button
  filters.forEach(function (filter) {
    filter.addEventListener('click', function () {
      // Get the filter value from the clicked button's data-filter attribute
      var filterValue = this.getAttribute('data-filter');

      // Apply the filter using Isotope's arrange method
      iso.arrange({
        filter: filterValue
      });

      // Remove active class from all buttons and add it to the clicked button
      filters.forEach(function (btn) {
        btn.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
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