const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');


//Mobile Toggle Menu
menuToggle.addEventListener('click', function(){
    if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'flex';
    }
});
