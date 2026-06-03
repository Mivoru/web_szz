
    document.addEventListener('DOMContentLoaded', () => {
        // Theme Toggle
        const themeToggle = document.getElementById('theme-toggle');
        const root = document.documentElement;
        
        // Load preference
        const savedTheme = localStorage.getItem('theme') || 'light';
        root.setAttribute('data-theme', savedTheme);
        themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

        themeToggle.addEventListener('click', () => {
            const currentTheme = root.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        });

        // Mobile Menu
        const hamburger = document.getElementById('hamburger');
        const sidebar = document.querySelector('.sidebar');
        if (hamburger && sidebar) {
            hamburger.addEventListener('click', () => {
                sidebar.classList.toggle('active');
            });
            
            // Close sidebar on link click (mobile)
            const links = sidebar.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        sidebar.classList.remove('active');
                    }
                });
            });
        }
    });
    