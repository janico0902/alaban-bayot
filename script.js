// Dark Mode Toggle Function
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('contactForm').addEventListener('submit', function (e) {

  e.preventDefault();


  const name = document.getElementById('name').value.trim();

  const email = document.getElementById('email').value.trim();

  const message = document.getElementById('message').value.trim();


  if (!name || !email || !message) {

    document.getElementById('formMessage').textContent = "Please fill out all fields.";

    return;

  }


  // Simulate sending

  document.getElementById('formMessage').textContent = `Thank you, ${name}! Your message has been sent.`;

  this.reset();

});

