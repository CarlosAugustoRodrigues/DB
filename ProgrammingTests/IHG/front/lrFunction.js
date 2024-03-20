

var users = [
    {
        id: 1,
        email: 'X5H6I@example.com',
        password: '123456'
    },
    {
        id: 2,
        email: 'X5H6I2@example.com',
        password: '123456'
    }
];

function login() {
    let emailLogin = document.getElementById('emailLogin');
    let passwordLogin = document.getElementById('passwordLogin');
    let alertmsg = document.querySelector('.alert');

    emailLogin.addEventListener('input', () => {
        emailLogin.classList.remove('wrong');
    });

    passwordLogin.addEventListener('input', () => {
        passwordLogin.classList.remove('wrong');
    });

    if(emailLogin.value == '' || passwordLogin.value == '') {
        if(emailLogin.value == '' && passwordLogin.value == '') {
            emailLogin.classList.add('wrong');
            passwordLogin.classList.add('wrong');
        } else if(emailLogin.value == '') {
            emailLogin.classList.add('wrong');
            
        } else if(passwordLogin.value == '') {
            passwordLogin.classList.add('wrong');
        }   
        return;
    }

    users.forEach(user => {
        if(emailLogin.value == user.email && passwordLogin.value == user.password) {
            alert('Login efetuado com sucesso!');
        };
    });

    alertmsg.classList.remove('opacity');
}