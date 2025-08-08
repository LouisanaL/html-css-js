// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Background color changer on project title click
const titles = document.querySelectorAll('.project-title');
const portfolioSection = document.querySelector('.portfolio-section');
const colors = [
    'rgba(173, 216, 230, 0.9)',  // pastel blue
    'rgba(144, 238, 144, 0.9)',  // pastel green
    'rgba(255, 223, 186, 0.9)',  // pastel orange
    'rgba(255, 182, 193, 0.9)',  // pastel red/pink
    'rgba(216, 191, 216, 0.9)'   // pastel purple
  ];
  
let colorIndex = 0;
titles.forEach(title => {
  title.addEventListener('click', (e) => {
    e.preventDefault();
    portfolioSection.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  });
});

// Contact form submission
const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  alert(`Thank you, ${name}! Your message has been received.\n\nSummary:\nEmail: ${email}\nMessage: ${message}`);
  form.reset();
  form.classList.remove('was-validated');
});
