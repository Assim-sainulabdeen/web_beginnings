CREATE TABLE departments(
dep_id INT,
dep_name VARCHAR(20),
dep_location VARCHAR(15),
PRIMARY KEY(dep_id)
);

INSERT INTO departments(dep_id) 
VALUES (1001);
INSERT INTO departments(dep_id) 
VALUES (2001);
INSERT INTO departments(dep_id) 
VALUES (3001);
INSERT INTO departments(dep_id, dep_name, dep_location) 
VALUES (4001, "PRODUCTION", "BRISBANE");


UPDATE departments
SET dep_name = "AUDIT", dep_location = "MELBOURNE"
WHERE dep_id = 2001;

UPDATE departments
SET dep_name = "MARKETING", dep_location = "PERTH"
WHERE dep_id = 3001;

UPDATE departments
SET dep_name = "FINANCE", dep_location = "SYDNEY"
WHERE dep_id = 1001;
