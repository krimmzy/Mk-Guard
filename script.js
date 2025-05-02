// Light/Dark Mode Toggle Functionality
document.getElementById('toggleTheme').addEventListener('click', function () {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
  
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-bs-theme', 'light');
      this.innerHTML = '<i class="bi bi-moon-stars-fill"></i>'; // Change icon to moon
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      this.innerHTML = '<i class="bi bi-sun-fill"></i>'; // Change icon to sun
    }
  });

