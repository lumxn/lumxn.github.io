function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('sidebar-hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  const submenuToggle = document.querySelector('.submenu-toggle');
  const submenu = document.querySelector('.submenu');
  
  submenuToggle.addEventListener('click', () => {
    submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
  });
});
