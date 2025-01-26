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
    const roles = ["Web Developer", "Web Designer", "UI/UX Designer"];
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

  // Intersection Observer for animations on scroll
  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });

  // Debounce function to optimize scroll events
  let debounceTimer;
  const debounce = (callback, delay) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(callback, delay);
  };

  document.addEventListener("scroll", () => {
    debounce(() => {
      elementsToAnimate.forEach((element) => {
        observer.observe(element);
      });
    }, 200); // 200ms debounce delay
  });
});
