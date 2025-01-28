document.addEventListener("DOMContentLoaded", () => {
  // Sticky header effect
  const header = document.querySelector(".header-area");
  let isScrolling = false;

  window.addEventListener("scroll", () => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 0) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
        isScrolling = false;
      });
      isScrolling = true;
    }
  });

  // Hamburger menu toggle
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navMenu = document.getElementById("nav-menu");
  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("open");
    navMenu.classList.toggle("open");
  });

  // Preloader
  const preloader = document.getElementById("preloader");
  preloader.style.transition = "opacity 0.5s ease";
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);

  // Typewriter effect
  const typewriterText = document.getElementById("typewriter-text");
  if (typewriterText) {
    const roles = ["Web Developer", "Wordpress Developer", "UI/UX Designer"];
    let roleIndex = 0;
    let charIndex = 0;
    let currentText = "";
    const typingSpeed = 100; // Speed of typing in ms
    const deletingSpeed = 50; // Speed of deleting in ms
    let isDeleting = false;

    const typeWriter = () => {
      // Add the appropriate class for each role color
      let currentRoleClass = "";

      if (roles[roleIndex] === "Web Developer") {
        currentRoleClass = "developer";
      } else if (roles[roleIndex] === "Wordpress Developer") {
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

      const speed = isDeleting ? deletingSpeed : typingSpeed;
      setTimeout(typeWriter, speed);
    };

    // Start typing effect
    typeWriter();
  }

  // Smooth scrolling
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Scroll to top button
  const scrollToTopButton = document.getElementById("scroll-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      scrollToTopButton.classList.add("show");
    } else {
      scrollToTopButton.classList.remove("show");
    }
  });

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Form Submission with Web3Forms API and Vanilla JavaScript
  document
    .getElementById("contactForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Form validation (Optional)
      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!firstName || !lastName || !email || !message) {
        document.getElementById("formError").textContent =
          "Please fill out all the fields.";
        document.getElementById("formError").style.display = "block";
        return;
      }

      // Hide previous messages
      document.getElementById("formResponse").style.display = "none";
      document.getElementById("formError").style.display = "none";

      try {
        // Simulate form submission to Web3Forms
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: "ab4e5c1f-7d99-4bac-b4fa-8dc86bd7d759",
            name: `${firstName} ${lastName}`,
            email: email,
            message: message,
          }),
        });

        if (response.ok) {
          // Show success message
          document.getElementById("formResponse").style.display = "block";
          document.getElementById("contactForm").reset(); // Reset the form
        } else {
          throw new Error("Submission failed");
        }
      } catch (error) {
        // Show error message
        document.getElementById("formError").style.display = "block";
      }
    });
});