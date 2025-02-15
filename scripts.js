// Alert on form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
  });
  
  // Back-to-top button functionality
  document.getElementById("back-to-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
      section.classList.remove('active');
    });

    // Show the clicked section
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
  }
  
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('message').innerText = "Passwords do not match!";
        document.getElementById('message').style.color = "red";
        return;
    }

    // Here you would typically send the data to the server

    document.getElementById('message').innerText = "Registration successful!";
    document.getElementById('message').style.color = "green";

    // Optionally reset the form
    this.reset();
});

// Alert on form submission
document.getElementsById("formonth-economy").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you for reaching out! We'll get back to you soon.");
});
document.getElementsById("forweek-economy").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you for reaching out! We'll get back to you soon.");
});