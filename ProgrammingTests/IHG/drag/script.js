const container = document.querySelector('.container');

const uris = [
    'http://localhost:3000/usuarios',
    'http://localhost:3000/tarefas'
];

var users = [];
var tasks = [];


uris.forEach(uri => {
    users = [];
    tasks = [];

    fetch(uri)
    .then(response => response.json())
    .then(data => {
        if(uri === 'http://localhost:3000/usuarios') {
            users.push(...data);
            render('users');
        } else {
            tasks.push(...data);
            render('tasks');
        }
        loadDrag();
    });
});

function render(type) {
    if(type === 'users') {
        users.forEach(user => {
            const modal = document.querySelector('.card.modal').cloneNode(true);

            modal.querySelector('h2').innerHTML = user.nome;
            modal.id = user.id;
            modal.classList.remove('modal');
            
            container.appendChild(modal);

        });
    } else {
        tasks.forEach(task => {
            const modal = document.querySelector('.box.modal').cloneNode(true);

            modal.querySelector('h2').innerHTML = task.descricao;
            modal.classList.remove('modal');

            console.log(document.getElementById(task.responsavel))

            if(document.getElementById(task.responsavel) == null) {
                container.appendChild(modal);
                return
            }

            document.getElementById(task.responsavel).querySelector('.card-container').appendChild(modal);
            modal.classList.add('attached');

        });
    }
}