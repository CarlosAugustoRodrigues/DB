DROP DATABASE IF EXISTS db;
CREATE DATABASE db CHARSET=UTF8 COLLATE utf8_general_ci;
USE db;

CREATE TABLE usuarios(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha  VARBINARY (50) NOT NULL
);

CREATE TABLE tarefas(
    id  INTEGER PRIMARY KEY AUTO_INCREMENT,
    descricao TEXT NOT NULL,
    data_limete DATETIME NOT NULL,
    status ENUM('Aberto', 'Em Andamento', 'Finalizado') NOT NULL,
    responsavel INT REFERENCES usuarios(id)
)

INSERT INTO usuarios (nome, email, senha)
VALUES 
    ("Colaborador 1", "colaborador1@email.com", "987654321"),
    ("Colaborador 2", "colaborador2@email.com", "123456789"),
    ("Colaborador 3", "colaborador3@email.com", "123454321");


INSERT INTO tarefas (descricao, data_limite, status, responsavel)
VALUES 
    ("Tarefa de teste 1", NOW() + INTERVAL 1 MONTH, "Aberto", 1),
    ("Tarefa de teste 2", NOW() + INTERVAL 2 WEEK, "Em Andamento", 2),
    ("Tarefa de teste 3", NOW() + INTERVAL 3 DAY, "Finalizado", 3);