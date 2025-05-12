document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('searchInput');
  const games = document.querySelectorAll('#games img');

  input.addEventListener('input', () => {
    const value = input.value.toLowerCase();
    games.forEach(img => {
      img.parentElement.style.display = img.alt.toLowerCase().includes(value) ? 'block' : 'none';
    });
  });
});
