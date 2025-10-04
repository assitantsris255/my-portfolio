document.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.skill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const level = entry.target.getAttribute('data-level');
      const bar = entry.target.querySelector('.progress');
      const text = entry.target.querySelector('.percent-text');

      bar.style.width = level + '%';
      text.textContent = level + '%';

      observer.unobserve(entry.target);
    });
  }, { threshold: 0.6 });

  skills.forEach(skill => observer.observe(skill));
});