use mecanicos;

SELECT * FROM usuarios;
##FUNCIONES

#FUNCIONES DE CADENA
SELECT length('cadena');
SELECT email, length(email) AS 'Cantidad de caracterers' FROM usuarios;

#concat --> concatenar dos o mas cadenas
SELECT concat('Hola', ' mundo', ' desde', ' MySQL');
SELECT concat(apellido,' ',nombre) AS 'Apellido y nombre' FROM usuarios;

#UPPER lower --> convierte a mayusculas o minusculas

SELECT upper('hola');
SELECT upper(concat(apellido,' ',nombre)) AS 'Apellido y nombre' FROM usuarios;

SELECT upper(apellido), upper(nombre) FROM usuarios;

SELECT lower('HOLA');

INSERT INTO usuarios (id,nombre,apellido,email,password)
VALUES (DEFAULT, upper('rogelio'), upper('roldan'),'rr@mail.com','1234');

INSERT INTO usuarios (nombre,apellido,email,password)
VALUES (lower('HOLA'), lower('MUNDO'),'jjmm@mail.com','1234');
SELECT * FROM usuarios;

#substring --> extrae una subcadena de una cadena comenzando por una pos y una cantidad de caracteres a extraer
SELECT substring('Hola mundo desde MySQL',6, 11);

#ifnull(expr, val) --> si expr es null devuelve val, caso contrario devuelve expr
SELECT ifnull(apellido, 'Completa apellido'), nombre FROM usuarios;

##FUNCIONES NUMERICAS

#ABS --> el valor absoluto de un número --> es la distancia del numero a cero (sin importar el signo)
SELECT abs(-10);
SELECT abs(10);

#round(valor, redondeo) --> redondeo de valores decimales
SELECT round(2.65897012, 2);
SELECT round(2.65897012, 3);

#pow(valor, exponente) --> potenciación
SELECT pow(2,3);

#mod --> devuelve el resto de una div
SELECT mod(10,2);
SELECT mod(10,3);

#FUNCIONES DE FECHA Y HORA

#fecha y hora actual
SELECT now();

#fecha actual
SELECT curdate();

#SUMAR TIEMPO A FECHAS

#agregar dias (day) a la fecha actual
SELECT date_add(curdate(), interval 10 day);
SELECT date_add(curdate(), interval 31 day);

#agregar años (year)
SELECT date_add(curdate(), interval 10 year);
INSERT INTO usuarios (id,nombre,apellido,email,password, createdAt)
VALUES (DEFAULT, upper('prueba'), upper('fecha sumar'),'fsumar@mail.com','1234',date_add(curdate(), interval 10 year));
select * from usuarios;

#sumar minutos
SELECT date_add(now(), interval 30 minute);

#restar tiempo a fechas

#restar años
SELECT date_sub(curdate(), interval 8 year);
SELECT date_sub(now(), interval 24 hour);

#Formatear fechas date_format
select curdate();

SELECT date_format(curdate(), '%d-%m-%y');
SELECT date_format(curdate(), '%d/%m/%y');

#Extraer los datos por separado de una fecha

SELECT year(curdate());
SELECT year('2025-05-12');
SELECT year(now());

SELECT month(curdate());
SELECT month('2025-05-12');
SELECT month(now());

SELECT day(curdate());
SELECT day('2025-05-12');
SELECT day(now());

#extraer hora
SELECT time(now());

SELECT hour(now());

SELECT minute(now());

SELECT second(now());

#obtener cuantos días faltan para llegar a una determinada fecha
SELECT datediff('2024-02-6', curdate());
SELECT datediff('2024-02-22', curdate());

#OJO --> devuelve negativo porque es una resta
SELECT datediff(curdate(), '2024-02-22');

#obtener cuantos días pasaron entre una fecha y hoy --> siempre devuelve dias
SELECT round((datediff(curdate(), '2023-02-22'))/365);

