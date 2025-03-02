document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    setTimeout(() => {
        intro.style.display = 'none';
    }, 4000);

    const moreBtn = document.querySelector('.more-btn');
    const moreInfo = document.querySelector('.more-info');
    moreBtn.addEventListener('click', () => {
        moreInfo.style.display = moreInfo.style.display === 'block' ? 'none' : 'block';
    });

    const hamburger = document.querySelector('.hamburger');
    const dropdown = document.querySelector('.dropdown');
    hamburger.addEventListener('click', () => {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    const sectionBtns = document.querySelectorAll('.section-btn');
    sectionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const sectionId = btn.textContent.toLowerCase().replace(/ /g, '-');
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
