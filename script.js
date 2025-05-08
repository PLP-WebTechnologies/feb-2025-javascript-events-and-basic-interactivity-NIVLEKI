// Event Handling
document.getElementById('changeTextBtn').addEventListener('click', () => {
    document.getElementById('main-heading').textContent = "Nivlek Solutions: Innovating Your Future!";
  });
  
  document.getElementById('hoverEffect').addEventListener('mouseover', () => {
    document.getElementById('hoverEffect').style.backgroundColor = '#e74c3c';
  });
  
  document.getElementById('keypressInput').addEventListener('keydown', (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  let pressTimer;
  document.getElementById('longPressBtn').addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => alert("Long Press Detected!"), 1500);
  });
  
  document.getElementById('longPressBtn').addEventListener('mouseup', () => {
    clearTimeout(pressTimer);
  });
  
  // Interactive Elements
  document.getElementById('colorChangeBtn').addEventListener('click', () => {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
  });
  
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
  
  // Form Validation
  document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('validation-feedback');
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      feedback.textContent = "Please enter a valid email address.";
      feedback.style.color = 'red';
      return;
    }
    
    if (password.length < 8) {
      feedback.textContent = "Password must be at least 8 characters long.";
      feedback.style.color = 'red';
      return;
    }
    
    feedback.textContent = "Form submitted successfully!";
    feedback.style.color = 'green';
  });
  