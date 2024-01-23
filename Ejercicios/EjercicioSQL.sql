CREATE DATABASE IF NOT EXISTS championship;

USE championship;

DROP TABLE IF EXISTS team;

CREATE TABLE team (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL UNIQUE,
	sponsor VARCHAR(50),
    color_first_shirt VARCHAR(30) NOT NULL UNIQUE,
    color_second_shirt VARCHAR(30) NOT NULL UNIQUE,
	category ENUM('sub-18', 'senior') NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modifiedAt DATETIME DEFAULT NULL
);

SELECT * FROM team;

DROP TABLE IF EXISTS games;

CREATE TABLE games(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_local_team INT UNSIGNED NOT NULL,
    id_visitor_team INT UNSIGNED NOT NULL,
    result_localteam INT UNSIGNED DEFAULT 0 NOT NULL,
    result_visitorteam INT UNSIGNED DEFAULT 0 NOT NULL,
    pitch VARCHAR(20) NOT NULL,
    referee VARCHAR(50) NOT NULL,
    incidents VARCHAR(500) DEFAULT 'Sin incidencias',
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	modifiedAt DATETIME DEFAULT NULL,
    FOREIGN KEY (id_local_team) REFERENCES team(id),
    FOREIGN KEY (id_visitor_team) REFERENCES team(id)
);

SELECT * FROM games;

DROP TABLE IF EXISTS player;

CREATE TABLE player(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    last_names VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(200) DEFAULT 'Sin dirección',
    tel VARCHAR(20) DEFAULT '000000000',
    id_team INT UNSIGNED NOT NULL,
	createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modifiedAt DATETIME DEFAULT NULL,
    FOREIGN KEY (id_team) REFERENCES team(id)
);

SELECT * FROM player;

-- En vez de poner la EDAD (age) se debe de poner la FECHA DE NACIMIENTO



