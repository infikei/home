function link_home() {
    location.href="https://infikei.github.io/home/new";
}
function link_profile() {
    location.href="https://infikei.github.io/home/new/#profile";
}
function link_blog() {
    location.href="https://infikei.github.io/home/new/#blog";
}
function link_pages() {
    location.href="https://infikei.github.io/home/new/#pages";
}
function link_contact() {
    location.href="https://infikei.github.io/new/home/#contact";
}
function link_talk() {
    location.href="https://pf.kakao.com/_xaeEyT";
}
function link_instagram() {
    location.href="https://instagram.com/infikei_photo";
}

const toggleBtn = document.querySelector('.navbar_togglebtn');
const menu = document.querySelector('.navbar_menu');
const sns = document.querySelector('.navbar_sns');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    sns.classList.toggle('active')
});