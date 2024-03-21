
const uri = 'http://localhost:3000'
const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const data = {
        emailLogin: document.getElementById('emailLogin').value,
        passwordLogin: document.getElementById('passwordLogin').value
    }

    let alertmsg = document.querySelector('.alert');

    fetch(`${uri}`, {
        method: 'POST',
        headers: { 
            "Content-Type": "application/json"
         },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        // if(res.status == 401) {

        //     alertmsg.classList.remove('opacity')
        //     alertmsg.innerText = `${res.loginMessage}`;

        //     if(res.type == 'password') {
        //         data.passwordLogin.classList.add('wrong');
        //     } else {
        //         data.emailLogin.classList.add('wrong');
        //     }

        // } 
        if (res.status == 200) {
            window.location.href = `${window.location.origin}/dashboard`;
        }
    });
});