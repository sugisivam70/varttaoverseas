document.querySelectorAll('.carousel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const track = btn.parentElement.querySelector('.carousel-track, .testimonial-track');
        const scrollAmount = 250;
        if (btn.classList.contains('next')) {
            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        } else {
            track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    });
});
