const urlParams = new URLSearchParams(window.location.search);
var urlSwitch = true;

const eyes = document.querySelectorAll('.eye')
const pswConfirm = document.querySelector('.pswConfirm');
const loginPage = document.querySelector('.lr-login');
const registerPage = document.querySelector('.lr-register');

function lrEvent(e) {
    if(e.classList.contains('login')) {
        window.location.href = "lr.html" + "?login=true"; 
    } else {
        window.location.href = "lr.html" + "?register=true";
    }
    
}

if(urlParams.get('login') === 'true') {
    loginPage.classList.remove('hidden');
} else if(urlParams.get('register') === 'true') {
    registerPage.classList.remove('hidden');
}

function toggleLoginRegister() {
    if(loginPage.classList.contains('hidden')) {
        loginPage.classList.remove('hidden');
        registerPage.classList.add('hidden');
    } else {
        loginPage.classList.add('hidden');
        registerPage.classList.remove('hidden');
    }
}

eyes.forEach(eye => {
    eye.addEventListener('click', () => {
        if(eye.parentElement.querySelector('input').type === 'password') {
            eye.parentElement.querySelector('input').type = 'text';
            eye.classList.remove('bi-eye-slash-fill');
            eye.classList.add('bi-eye-fill');

            pswConfirm.classList.add('hidden');
        } else {
            eye.parentElement.querySelector('input').type = 'password';
            eye.classList.remove('bi-eye-fill');
            eye.classList.add('bi-eye-slash-fill');

            pswConfirm.classList.remove('hidden');
        }
    })
})