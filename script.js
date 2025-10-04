// script.js
document.querySelector('.primary').addEventListener('click', () => {
  alert('Redirecting to BRA Technologies...');
});

document.querySelector('.outline').addEventListener('click', () => {
  alert('Downloading CV...');
});
// Animate each progress bar to its data-percent on scroll
window.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.progress');
  const options = { threshold: 0.5 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.getAttribute('data-percent');
        observer.unobserve(bar);
      }
    });
  }, options);

  bars.forEach(bar => observer.observe(bar));
});
window.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.progress');

  bars.forEach((bar, index) => {
    // stagger animations by 200ms each
    setTimeout(() => {
      const target = bar.getAttribute('data-percent');
      bar.style.width = target;
    }, index * 200);
  });
});
// Optional: Show tooltip on hover
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.boxShadow = '0 0 10px rgba(255,255,255,0.3)';
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.boxShadow = 'none';
  });
});
