-- CONSULTA MÚLTIPLES TABLAS 
USE sakila;

SELECT * FROM customer;

SELECT * FROM address;

SELECT customer.last_name, customer.first_name, address.address, address.phone
FROM customer, address
WHERE customer.address_id = address.address_id; -- Emparejamiento

-- alias en tablas 
SELECT c.last_name, c.first_name, a.address, a.phone, ci.city
FROM customer c, address a, city ci
WHERE c.address_id = a.address_id AND a.city_id = ci.city_id;
-- con el WHERE emparejamos y filtramos

-- JOINS --> buscar dentro deallocate prepare
SELECT c.last_name, c.first_name, a.address, a.phone
FROM customer c
INNER JOIN address a ON a.address_id = c.address_id;

-- solo de Smith
SELECT c.last_name, c.first_name, a.address, a.phone
FROM customer c
INNER JOIN address a ON a.address_id = c.address_id
WHERE c.last_name = 'Smith';
-- usamos el INNER JOIN para meterse en las tablas y el WHERE para filtrar

SELECT c.last_name, c.first_name, a.address, a.phone, ci.city
FROM customer c
JOIN address a ON a.address_id = c.address_id
JOIN city ci ON ci.city_id = a.city_id
JOIN country cu ON cu.country_id = ci.country_id
WHERE cu.country = 'India';

/* 

 TIPOS DE JOIN: INNER JOIN (JOIN), LEFT, RIGHT
 
 Con el Join se vinculan las dos tablas y se muestran los datos que estés vinculados,
 es decir, que exista un customer que si o si tenga una city o un country asignado
 En caso que no estuvieran vinculados ese dato NO SE MUESTRA.


*/

/* 

 LEFT JOIN: devuelve todas las filas de la tabla que se encuentra del lado izquierdo
 y solo las filas COINCIDENTES de la tabla de la derecha. Si no hay coincidencia
 del lado derecho devolverá un NULL

*/
-- ejemplo
SELECT c.last_name, r.return_date FROM customer c
LEFT JOIN rental r ON r.customer_id = c.customer_id;

/* 

	RIGHT JOIN: devuelve todas las filas de la tabla de la derecha y las COINCIDENTES
	de la tabla de la izquierda

*/

SELECT r.return_date, c.last_name FROM rental r
RIGHT JOIN customer c ON c.customer_id = r.customer_id;




