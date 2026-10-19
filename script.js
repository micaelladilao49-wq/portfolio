
document.addEventListener("DOMContentLoaded", function () {
  // 1. Welcome message
  alert("Welcome to Mica Ella Dilao's Portfolio!");

  // 2. Current date
  const todayDate = document.getElementById("todayDate");

  function updateDate() {
    if (todayDate) {
      todayDate.textContent = new Date().toLocaleDateString(
        "en-PH",
        {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        }
      );
    }
  }

  updateDate();

  // 3. Automatic copyright year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // 4. Dark / Light mode
  const themeButton = document.getElementById("themeButton");

  if (themeButton) {
    themeButton.addEventListener("click", function () {
      document.body.classList.toggle("dark");

      const darkMode = document.body.classList.contains("dark");

      themeButton.textContent = darkMode ? "☀" : "◐";
      themeButton.setAttribute(
        "aria-label",
        darkMode ? "Switch to light mode" : "Switch to dark mode"
      );
    });
  }

  // 5. Contact form feedback
  const contactForm = document.getElementById("contactForm");
  const formNotice = document.getElementById("formNotice");

  if (contactForm && formNotice) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const name = document.getElementById("name").value.trim();

      formNotice.textContent =
        "Thank you, " + name +
        "! Your message form was completed successfully. " +
        "Please contact me through my email to send your message.";

      contactForm.reset();
    });
  }

  // 6. Back-to-top button
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.classList.toggle("show", window.scrollY > 300);
    });

    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // 7. Activity details popup
  const activityModal = document.getElementById("activityModal");
  const closeModal = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");

  function hideModal() {
    if (activityModal) {
      activityModal.classList.remove("show");
      activityModal.setAttribute("aria-hidden", "true");
    }
  }

  document.querySelectorAll(".activity-card").forEach(function (card) {
    const heading = card.querySelector("h3");
    const description = card.querySelector("p");
    const link = card.querySelector("a");

    if (!heading || !description || !link || !activityModal) {
      return;
    }

    // Open details only when clicking the activity title.
    heading.style.cursor = "pointer";

    heading.addEventListener("click", function () {
      modalTitle.textContent = heading.textContent;
      modalDescription.textContent = description.textContent;

      activityModal.classList.add("show");
      activityModal.setAttribute("aria-hidden", "false");
    });
  });

  if (closeModal) {
    closeModal.addEventListener("click", hideModal);
  }

  if (activityModal) {
    activityModal.addEventListener("click", function (event) {
      if (event.target === activityModal) {
        hideModal();
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      hideModal();
    }
  });
});
