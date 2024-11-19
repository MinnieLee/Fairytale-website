document.querySelectorAll('.image-container').forEach(container => {

    container.addEventListener('click', () => {
        const link = container.getAttribute('data-link');
        window.location.href = link;
    });

    container.addEventListener('mouseenter', () => {
        document.querySelectorAll('.image-container').forEach(other => {
            if (other !== container) {
                other.querySelector('img').style.opacity = '0.2';
            }
        });
    });

    container.addEventListener('mouseleave', () => {
        document.querySelectorAll('.image-container img').forEach(img => {
            img.style.opacity = '1';
        });
    });
});