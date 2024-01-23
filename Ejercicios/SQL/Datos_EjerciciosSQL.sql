-- Inserta dos equipos en la misma categoria
INSERT INTO team VALUES (DEFAULT, 'Pantera Rosa', 'Pepsi', 'Rosa', 'Blanca', 'sub-18', DEFAULT, DEFAULT),
						(DEFAULT, 'New Team', 'ColaCao', 'Amarilla', 'Verde', 'sub-18', DEFAULT, DEFAULT),
                        (DEFAULT, 'Chanchito Feliz', 'MSI', 'Azul-Blanco', 'Violeta', 'senior', DEFAULT, DEFAULT);
                        
 -- Inserta 4 usuarios: 2 del team 1 y otros dos del team 2             
INSERT INTO player VALUES (DEFAULT, 'Cristian', 'Sedeño', 18, DEFAULT, '123456789', 1, DEFAULT, DEFAULT),
						  (DEFAULT, 'Oliver', 'Aton', 18, 'Direccion1', DEFAULT, 1, DEFAULT, DEFAULT),
                          (DEFAULT, 'Roberto', 'De La Rosa Ramirez', 20, DEFAULT, '444333555', 2, DEFAULT, DEFAULT),
                          (DEFAULT, 'Lisa', 'Simpson', 19, 'Direccion2', DEFAULT, 2, DEFAULT, DEFAULT),
                          (DEFAULT, 'Chanchito', 'Feliz', 20, 'Submundo', '258258258', 3, DEFAULT, DEFAULT);
                          
-- Inserta un partido y haz que el equipo 1 y 2 se enfrenten
INSERT INTO games VALUES (DEFAULT, 1, 2, DEFAULT, 2, 'Alabasta', 'Benito', DEFAULT, DEFAULT, DEFAULT);

-- Modificar resultado final a 1-2
UPDATE games SET result_localteam  = 1 WHERE id = 1;

-- Eliminar atributo apellido de la tabla player
ALTER TABLE player DROP COLUMN last_names;

-- Modificar el nombre 'tel' de la tabla de player
ALTER TABLE player CHANGE COLUMN tel tl VARCHAR(20) DEFAULT NULL;

-- Modificar el nombre y tlf del jugador con id=2
UPDATE player SET name = 'Benji', tlf = DEFAULT WHERE id = 2;
						
-- Eliminar a un jugador de cada equipo
DELETE FROM player WHERE id = 1 OR id = 3;

-- Esto ya es cosecha mia. Cambiar el Default de la column tlf de la tabla player
ALTER TABLE player MODIFY tlf VARCHAR(15) DEFAULT NULL;

SELECT * FROM player;
                        
