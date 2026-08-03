// Highlight current nav item (if you use multiple pages)
document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Simple search filter for posts (expandable)
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', e => {
  const query = e.target.value.toLowerCase();
  const title = document.querySelector('.post h2').textContent.toLowerCase();
  document.querySelector('.post').style.display =
    title.includes(query) ? 'block' : 'none';
});
// Grab elements

const searchBtn = document.getElementById('searchBtn');

// Trigger search on button click
searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query.length) {
    // Replace this alert with real search logic or redirect
    alert(`Searching for: ${query}`);
  }
});

// Trigger search on Enter key
searchInput.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    searchBtn.click();
  }
});