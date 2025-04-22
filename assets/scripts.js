document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Apply the saved theme
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Update button text
    toggleButton.textContent = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

    // Toggle theme on button click
    toggleButton.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        toggleButton.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    });
});