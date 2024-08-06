// Add event listeners to links
document.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your link click handling logic here
    });
});