
      window.addEventListener("load", () => {
        setTimeout(() => {
          document.getElementById("preloader").classList.add("hide");
        }, 1000);
      });

      function showSection(sectionId) {
        const section = document.getElementById(sectionId);
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }

      function downloadCV() {
        alert("The CV will be downloaded!!");
      }

      document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phoneno").value.trim();
        const email = document.getElementById("gmail").value.trim();
        const message = document.getElementById("message").value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (name && phone && email && message) {
          if (!emailRegex.test(email)) {
            document.getElementById("modal-message").textContent = "Please enter a valid email address.";
            document.getElementById("form-modal").style.display = "flex";
            return;
          }
          if (phone.length < 10) {
            document.getElementById("modal-message").textContent = "Please enter a valid phone number.";
            document.getElementById("form-modal").style.display = "flex";
            return;
          }
          console.log("Form Submitted:", { name, phone, email, message });
          document.getElementById("modal-message").textContent = "Thank you for your message!";
          document.getElementById("form-modal").style.display = "flex";
          this.reset();
        } else {
          document.getElementById("modal-message").textContent = "Please fill out all fields.";
          document.getElementById("form-modal").style.display = "flex";
        }
      });

      function closeModal() {
        document.getElementById("form-modal").style.display = "none";
      }

      function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      window.addEventListener("scroll", () => {
        const backToTop = document.getElementById("back-to-top");
        if (window.scrollY > 300) {
          backToTop.style.display = "block";
        } else {
          backToTop.style.display = "none";
        }
      });

      // Intersection Observer for section animations
      const sections = document.querySelectorAll("section");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, { threshold: 0.1 });

      sections.forEach(section => {
        observer.observe(section);
      });
