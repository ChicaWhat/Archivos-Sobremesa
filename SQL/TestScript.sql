-- Creamos la base de datos (si no existe).
CREATE DATABASE IF NOT EXISTS championship;

-- Seleccionamos la base de datos.
USE championship;

-- Escribe a continuación el código SQL solicitado.
DROP 


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

INSERT INTO team VALUES (DEFAULT, 'Pantera Rosa', 'Pepsi', 'Rosa', 'Blanca', 'sub-18', DEFAULT, DEFAULT),
(DEFAULT, 'New Team', 'ColaCao', 'Amarilla', 'Verde', 'sub-18', DEFAULT, DEFAULT),
(DEFAULT, 'Chanchito Feliz', 'MSI', 'Azul-Blanco', 'Violeta', 'senior', DEFAULT, DEFAULT);

 SELECT * FROM team;

DROP TABLE IF EXISTS player;

CREATE TABLE player(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    last_names VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 18) NOT NULL,
    address VARCHAR(200) DEFAULT 'Sin dirección',
    tel VARCHAR(20) DEFAULT '000000000',
    id_team INT UNSIGNED NOT NULL,
	createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modifiedAt DATETIME DEFAULT NULL,
    FOREIGN KEY (id_team) REFERENCES team(id)
);

INSERT INTO player VALUES (DEFAULT, 'Cristian', 'Sedeño', 18, DEFAULT, '123456789', 1, DEFAULT, DEFAULT),
(DEFAULT, 'Oliver', 'Aton', 18, 'Direccion1', DEFAULT, 1, DEFAULT, DEFAULT),
(DEFAULT, 'Roberto', 'De La Rosa Ramirez', 20, DEFAULT, '444333555', 2, DEFAULT, DEFAULT),
(DEFAULT, 'Lisa', 'Simpson', 19, 'Direccion2', DEFAULT, 2, DEFAULT, DEFAULT),
(DEFAULT, 'Chanchito', 'Feliz', 20, 'Submundo', '258258258', 3, DEFAULT, DEFAULT);



