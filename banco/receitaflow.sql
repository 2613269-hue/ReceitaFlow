SET NAMES utf8mb4;

CREATE DATABASE IF NOT EXISTS receitaflow
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE receitaflow;

CREATE TABLE usuarios (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  senha_hash CHAR(60) NOT NULL,
  criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE receitas (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  usuario_id INT UNSIGNED NOT NULL,
  nome VARCHAR(120) NOT NULL,
  descricao TEXT NULL,
  dificuldade ENUM('facil', 'media', 'dificil') NOT NULL DEFAULT 'media',
  status ENUM('rascunho', 'testada', 'favorita') NOT NULL DEFAULT 'rascunho',
  criada_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  testada_em DATETIME NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_receitas_usuario FOREIGN KEY (usuario_id)
    REFERENCES usuarios(id) ON DELETE CASCADE,
  CONSTRAINT ck_receitas_nome CHECK (CHAR_LENGTH(TRIM(nome)) >= 3)
);

CREATE TABLE ingredientes (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  usuario_id INT UNSIGNED NOT NULL,
  nome VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT uq_ingrediente_usuario UNIQUE (usuario_id, nome),
  CONSTRAINT fk_ingredientes_usuario FOREIGN KEY (usuario_id)
    REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE receita_ingrediente (
  receita_id INT UNSIGNED NOT NULL,
  ingrediente_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (receita_id, ingrediente_id),
  CONSTRAINT fk_ri_receita FOREIGN KEY (receita_id)
    REFERENCES receitas(id) ON DELETE CASCADE,
  CONSTRAINT fk_ri_ingrediente FOREIGN KEY (ingrediente_id)
    REFERENCES ingredientes(id) ON DELETE CASCADE
);
