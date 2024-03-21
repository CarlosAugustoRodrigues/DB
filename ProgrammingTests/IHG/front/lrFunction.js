
const uri = 'http://localhost:3000'

form.addEventListener('submit', () => {

    const data = {
        emailLogin: document.getElementById('emailLogin'),
        passwordLogin: document.getElementById('passwordLogin')
    }

    let alertmsg = document.querySelector('.alert');

    fetch(`${uri}/login`, {
        method: 'POST',
        headers: { 
            "Content-Type": "application/json"
         },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        if(response.status == 401) {

            alertmsg.classList.remove('opacity')
            alertmsg.innerText = `${response.loginMessage}`;

            if(response.type == 'password') {
                data.passwordLogin.classList.add('wrong');
            } else {
                data.emailLogin.classList.add('wrong');
            }

        } else if (response.status == 200) {
            window.location.href = `${window.location.origin}/dashboard`;
        }
    });
});