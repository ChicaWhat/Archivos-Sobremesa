-- Funciones de agregación --> count (cuenta), avg (promedio)

-- Sum --> hace la sumatoria de un campo numérico, a diferencia del count
-- que te puede agrupar todo en un solo número ya estes contando valores
-- numéricos o no

SELECT * FROM film;

SELECT sum(length) FROM film;

-- Max y Min --> devuelve el máximo valor o el mínimo valor
SELECT max(length) AS 'Mayor duracion', min(length) FROM film;

SELECT max(length) FROM film;

SELECT min(length) FROM film;

-- clausula having --> pone una condición a una función agregada

-- SELECT title, min(length) FROM film HAVING min(length); ESTO NO FUNCIONA

-- CANTIDAD DE APELLIDOS QUE SE REPITEN
SELECT count(last_name), last_name FROM actor GROUP BY last_name;

-- CANTIDAD DE APELLIDOS QUE SE REPITEN MÁS DE DOS VECES
SELECT count(last_name) AS Cantidad, last_name AS Nombre FROM actor GROUP BY last_name HAVING count(last_name) > 2;

-- Muestra todos los nombres distintos que hay, sin repetirlos
SELECT DISTINCT last_name FROM actor;
