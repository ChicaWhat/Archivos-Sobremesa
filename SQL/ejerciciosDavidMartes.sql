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











