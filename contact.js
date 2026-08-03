document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const successOverlay = document.getElementById('successMessage');
  const closeBtn = document.getElementById('closeSuccess');

  const showError = (input, msg) => {
    const group = input.parentElement;
    group.querySelector('.error-msg').textContent = msg;
    input.classList.add('invalid');
  };

  const clearError = input => {
    const group = input.parentElement;
    group.querySelector('.error-msg').textContent = '';
    input.classList.remove('invalid');
  };

  const isValidEmail = email =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    // Name validation
    const nameEl = form.name;
    if (!nameEl.value.trim()) {
      showError(nameEl, 'Name is required');
      valid = false;
    } else {
      clearError(nameEl);
    }

    // Email validation
    const emailEl = form.email;
    if (!isValidEmail(emailEl.value)) {
      showError(emailEl, 'Valid email is required');
      valid = false;
    } else {
      clearError(emailEl);
    }

    // Message validation
    const msgEl = form.message;
    if (msgEl.value.trim().length < 10) {
      showError(msgEl, 'Message must be at least 10 characters');
      valid = false;
    } else {
      clearError(msgEl);
    }

    if (!valid) return;

    // Show thank-you overlay
    successOverlay.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    successOverlay.style.display = 'none';
    form.reset();
  });
});