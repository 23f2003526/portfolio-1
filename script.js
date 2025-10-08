// Simple script to handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const responseDiv = document.getElementById('formResponse');
  
  if (name && email && message) {
    // Here, you'd normally send data to backend or email service.
    // For static site, just show confirmation.
    responseDiv.style.color = 'green';
    responseDiv.innerHTML = 'Thank you, your message has been sent!';
    document.getElementById('contactForm').reset();
  } else {
    responseDiv.style.color = 'red';
    responseDiv.innerHTML = 'Please fill in all fields.';
  }
});