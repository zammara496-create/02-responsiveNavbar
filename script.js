let x = document.getElementById('menu');
let mIcon = document.getElementById('menuIcon');
let cIcon = document.getElementById('closeIcon');
let ImgIcon = document.getElementById('imIcon')

let Login = document.getElementById('login');
let Register = document.getElementById('register')

function openMenu() {
    x.style.display = 'block';
    cIcon.style.display = 'block';
    mIcon.style.display = 'none';
}
function closeMenu() {
    x.style.display = 'none';
    cIcon.style.display = 'none';
    mIcon.style.display = 'block';
}

function clickIcon() {
    Login.style.display = 'block';
    Register.style.display = 'block';
    ImgIcon.style.display = 'none';
}