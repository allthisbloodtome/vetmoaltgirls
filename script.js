// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitButton = document.getElementById('submitButton');
      const buttonText = submitButton.querySelector('.btn-text');
      const originalText = buttonText.textContent;
      
      // Show loading state
      submitButton.disabled = true;
      buttonText.textContent = 'Отправка...';
      
      // Simulate form submission
      setTimeout(function() {
        // Reset form
        e.target.reset();
        
        // Show success message
        alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
        
        // Reset button
        submitButton.disabled = false;
        buttonText.textContent = originalText;
      }, 1500);
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
});