
const uri = 'http://localhost:3000'
const loginForm = document.querySelector('#loginForm');
const alertmsg = document.querySelector('.alert');

emailLogin.addEventListener('input', () => {
    emailLogin.classList.remove('wrong');
    alertmsg.classList.add('opacity');
})

passwordLogin.addEventListener('input', () => {
    passwordLogin.classList.remove('wrong');
    alertmsg.classList.add('opacity');
})

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailLogin = document.querySelector('#emailLogin');
    const passwordLogin = document.querySelector('#passwordLogin');

    fetch(`${uri}/login`, {
        method: 'POST',
        headers: { 
            "Content-Type": "application/json"
         },
        body: JSON.stringify({
            email: emailLogin.value,
            senha: passwordLogin.value
        })
    })
    .then(res => res.json())
    .then(res => {
        if(res.status == 401) {
            alertmsg.classList.remove('opacity')
            alertmsg.innerText = `${res.loginMessage}`;

            if(res.type == 'password') {
                passwordLogin.classList.add('wrong');
            } else {
                emailLogin.classList.add('wrong');
            }

        } else if (res.status == 200) {
           alert('Login feito com sucesso!');
        }
    });
});