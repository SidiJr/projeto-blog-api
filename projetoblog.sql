CREATE DATABASE IF NOT EXISTS projetoblog;
USE projetoblog;

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT
);

CREATE TABLE autores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE
);

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    data_criacao DATE NOT NULL,
    imagem VARCHAR(255),
    categoria_id INT NOT NULL,
    autor_id INT NOT NULL,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE SET NULL,
    FOREIGN KEY (autor_id) REFERENCES autores(id) ON DELETE SET NULL
);

-- Categorias
INSERT INTO categorias (nome, descricao) VALUES 
('Tecnologia', 'Posts sobre novidades e tendências tecnológicas'),
('Educação', 'Conteúdo voltado ao aprendizado e ensino'),
('Saúde', 'Informações e dicas sobre bem-estar e saúde');

-- Autores
INSERT INTO autores (nome, email) VALUES 
('João Silva', 'joao.silva@email.com'),
('Maria Oliveira', 'maria.oliveira@email.com'),
('Carlos Souza', 'carlos.souza@email.com');
