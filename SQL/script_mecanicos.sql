#Creación de un script desde cero que me crea una base de datos
#con sus entidades y la carga de datos (poblado de datos)

# 1. Crear la base de datos --> si es que no existe

CREATE DATABASE IF NOT EXISTS mecanicos;

USE mecanicos;

DROP TABLE IF EXISTS bus;

CREATE TABLE bus (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nro_interno VARCHAR(10) NOT NULL UNIQUE,
    marca VARCHAR(50) DEFAULT 'Sin marca',
    modelo VARCHAR(10) DEFAULT 'Sin modelo',
    patente VARCHAR(20) NOT NULL
);


DROP TABLE IF EXISTS mecanicos;

CREATE TABLE mecanicos (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nro_empleado VARCHAR(10) NOT NULL UNIQUE,
    nombre VARCHAR(100) DEFAULT 'Sin nombre',
    direccion VARCHAR(100) DEFAULT 'Sin direccion',
    telefono VARCHAR(20) DEFAULT '000000000',
    id_bus INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_bus) REFERENCES bus(id)
);


DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY ,
    nombre VARCHAR(100) DEFAULT NULL,
    apellido VARCHAR(100) DEFAULT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(20) NOT NULL,
    role ENUM('admin', 'normal') DEFAULT 'normal' NOT NULL,
	isDeleted BOOLEAN DEFAULT FALSE,
    isBanned BOOLEAN DEFAULT FALSE,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);



