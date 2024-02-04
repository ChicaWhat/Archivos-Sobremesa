#SELECT campos_o_columnas_de_las_entidades
#FROM tablas_o_entidades de donde salen los campos
#WHERE el emparejamiento y las condiciones de filtrado
#ORDER BY condiciones de ordenamiento ASC/DESC --> por defecto es asc

use sakila;

SHOW tables;
select * from actor;

SELECT first_name AS Nombre, last_name AS Apellido
FROM actor;

SELECT first_name AS Nombre, last_name AS Apellido, last_update
FROM actor
ORDER BY last_name desc, first_name asc;

SELECT first_name, last_name
FROM actor
WHERE first_name = 'cameron';

SELECT first_name, last_name
FROM actor
WHERE (first_name = 'cameron' AND last_name = 'streep') OR (first_name = 'penelope' AND last_name = 'monroe');

SELECT first_name, last_name
FROM actor
WHERE NOT(first_name = 'cameron' AND last_name = 'streep') OR (first_name = 'penelope' AND last_name = 'monroe');

SELECT first_name, last_name
FROM actor
WHERE first_name != 'cameron';

select * from actor;

SELECT * from film
WHERE length > 50
ORDER BY length;

SELECT title, description, length, rental_duration
FROM film
WHERE (rental_duration >= 4 AND rental_duration < 7) OR length > 100;

SELECT title, description, length, rental_duration
FROM film
WHERE (rental_duration >= 4 AND rental_duration < 7) AND length > 100;

#LIKE
SELECT * FROM actor
WHERE first_name LIKE '%ed';

SELECT first_name, last_name, last_update
FROM actor
WHERE first_name LIKE 'c%' AND year(last_update) = 2007 AND (month(last_update) = '5' OR month(last_update) = '4');

#campos calculados
SELECT * from actor;
select curdate();
SELECT first_name, last_name, round(datediff(curdate(), date(last_update))/365) as Edad FROM actor;

SELECT (rental_rate * 2) + 1 FROM film;

select * from film;
SELECT title, rating from film where rating = 'PG';

SELECT count(rating) FROM film WHERE rating = 'PG';

select rating, avg(length) from film group by rating;

SELECT rating, count(rating) FROM film GROUP BY rating;
