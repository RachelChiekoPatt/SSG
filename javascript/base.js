const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

if (menuToggle && mobileNav) {
    mobileNav.style.display = 'none';
    menuToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');

        if (mobileNav.style.display === 'flex') {
            mobileNav.style.display = 'none';
        } else {
            mobileNav.style.display = 'flex';
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            mobileNav.style.display = 'none';
            menuToggle.classList.remove('active');
        }
    });
}