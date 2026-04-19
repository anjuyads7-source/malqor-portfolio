document.addEventListener('DOMContentLoaded', () => {
  console.log('Malqors Portfolio Loaded');
  // Simple interactions
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
