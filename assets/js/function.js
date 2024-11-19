// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.querySelector('#theme-toggle');
    
    // Check if the button exists
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            // Toggle dark mode class on the body
            document.body.classList.toggle('dark-mode');

            // Update button text based on the current mode
            if (document.body.classList.contains('dark-mode')) {
                themeToggleButton.textContent = 'Switch to Light Mode';
            } else {
                themeToggleButton.textContent = 'Switch to Dark Mode';
            }
        });
    } else {
        console.error('Theme toggle button not found.');
    }
});
