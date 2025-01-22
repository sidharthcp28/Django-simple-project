// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Spinner
    const spinner = document.getElementById('spinner');
    if (spinner) {
        setTimeout(() => {
            spinner.style.display = 'none';
        }, 1000); // Hide the spinner after 1 second
    }

    // Smooth Scroll for "Back to Top" Button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});