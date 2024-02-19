USE sakila;

-- 1. Títulos de las películas que pertenecen a la categoría "documentary".
-- 2. Nombre y apellidos de los actores que participan en la película "October Submarine" por orden alfabético del apellido ascendente.
-- 3. Nombre y dirección de los clientes que pertenecen al distrito de California.
-- 4. Lista por orden cronologico de las peliculs en ingles que muestre el año de la pelicula. Ordena el resultado por orden alfabetico descendente

SELECT F.title, F.release_year FROM film F
INNER JOIN language L ON F.language_id = L.language_id
WHERE L.name = 'english'
ORDER BY F.title DESC;

-- 1
SELECT F.title, C.name FROM film F
INNER JOIN film_category FC ON F.film_id = FC.film_id
INNER JOIN category C ON FC.category_id = C.category_id
WHERE C.name = 'Documentary';

-- 2
SELECT A.first_name, A.last_name, F.title FROM actor A
INNER JOIN film_actor FA ON A.actor_id = FA.actor_id
INNER JOIN film F ON FA.film_id = F.film_id
WHERE F.title = "October Submarine"
ORDER BY A.last_name;

-- 3
SELECT C.first_name, C.last_name, A.address FROM customer C
INNER JOIN address A ON C.address_id = A.address_id
-- INNER JOIN city Ci ON A.city_id = Ci.city_id
-- INNER JOIN country Co ON Ci.country_id = Co.country_id
WHERE A.district = "California";

-- 1. Actores que contengan dos 'O' en su nombre y en una 'A' en su apellido.
SELECT A.first_name, A.last_name FROM actor A
WHERE A.first_name LIKE '%O%O%' AND A.last_name LIKE '%A%';

-- 2. Actores donde su tercera letra sea 'B'.
SELECT * FROM actor A
WHERE SUBSTRING(A.first_name, 3, 1) = 'B' ; -- SUBSTRING(str, pos, len)
-- WHERE first_name LIKE '__B%';

-- 3. Peliculas con una duracion entre 80 y 100.
SELECT F.title, F.length FROM film F
WHERE length BETWEEN 80 AND 100; 

-- 4. Peliculas con un rating de PG o G.
SELECT F.title, F.rating FROM film F
WHERE rating IN ('PG' , 'G'); 

-- 5. ¿Cuántos actores hay? Número total.
SELECT COUNT(*) AS numOfActors FROM actor;

-- 6. ¿Qué apellidos aparecen más de una vez?
SELECT count(last_name) AS Cantidad, last_name AS Apellido FROM actor 
GROUP BY last_name HAVING count(last_name) > 1;

-- 7. ¿Cuál es la media total de minutos de todas las películas de la base de datos?
SELECT avg(length) AS 'Duracion media' FROM film;








