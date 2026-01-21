/* 
    Grand Haven - JavaScript Functionality
*/

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('mainHeader');
    
    // Navbar Scroll Effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Basic Form validation for booking
    const bookingForm = document.querySelector('#booking form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for choosing Grand Haven! We are checking availability for you...');
        });
    }
});
