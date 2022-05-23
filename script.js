//swiper//
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 75,
    loop: true,
    // пагинация
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },

});

//tabs//
document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.tabs-nav__btn').forEach(function(btn) {
            btn.classList.remove('tabs-nav__btn--active')
        });
        e.currentTarget.classList.add('tabs-nav__btn--active');
        document.querySelectorAll('.tabs-item').forEach(function(tabsBtn) {
            tabsBtn.classList.remove('tabs-item--active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
});


//accordion//
$(".accordion").accordion();


//burger//

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


//search//

const searchBtn = document.querySelector('.search-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('input');
const headerLogo = document.querySelector('.header__logo');
const headerBurger = document.querySelector('.header__burger');

searchBtn.onclick = () => {
    searchBox.classList.add('active');
    searchInput.classList.add('active');
    searchBtn.classList.add('active');
    cancelBtn.classList.add('active');
    headerLogo.classList.add('transparent');
    headerBurger.classList.add('transparent');

}
cancelBtn.onclick = () => {
    searchBox.classList.remove('active');
    searchInput.classList.remove('active');
    searchBtn.classList.remove('active');
    cancelBtn.classList.remove('active');
    headerLogo.classList.remove('transparent');
    headerBurger.classList.remove('transparent');
}
