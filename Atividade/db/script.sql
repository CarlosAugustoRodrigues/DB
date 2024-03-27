DROP DATABASE IF EXISTS db;
CREATE DATABASE db CHARSET=UTF8 COLLATE utf8_general_ci;
USE db;

CREATE TABLE usuarios(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha  VARCHAR (50) NOT NULL
);

CREATE TABLE tarefas(
    id  INTEGER PRIMARY KEY AUTO_INCREMENT,
    responsavel INTEGER,
    descricao TEXT NOT NULL,
    data_limite DATETIME NOT NULL,
    status ENUM('Aberto', 'Em Andamento', 'Finalizado') NOT NULL,
    FOREIGN KEY (responsavel) REFERENCES usuarios(id)
);