// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.querySelector('#theme-toggle');
    
    // Enable dark mode by default on page load
    document.body.classList.add('dark-mode');

    // Update the button text to reflect the current mode
    if (themeToggleButton) {
        themeToggleButton.textContent = 'Switch to Light Mode';
        
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

// Scroll-to-Top Button Functionality
document.addEventListener('DOMContentLoaded', () => {
    const scrollTopButton = document.querySelector('#scroll-top');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollTopButton.classList.add('active');
        } else {
            scrollTopButton.classList.remove('active');
        }
    });

    // Smooth scroll to top when the button is clicked
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});

// Interactive Clock Function
function updateClock() {
    const clockElement = document.getElementById('clock');
    if (!clockElement) return; // Exit if no clock element is found

    const now = new Date();

    // Format time as HH:MM:SS
    const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    // Update the clock element
    clockElement.textContent = timeString;
}

// Call updateClock every second
setInterval(updateClock, 1000);

// Initialize clock immediately on page load
updateClock();
