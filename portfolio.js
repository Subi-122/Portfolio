function toggleImages() {
    const hiddenImages = document.querySelectorAll('.hidden');
    hiddenImages.forEach(img => img.classList.toggle('hidden'));
    document.querySelector('.see-more-btn').style.display = 'none';
}
