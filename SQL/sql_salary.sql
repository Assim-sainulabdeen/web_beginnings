CREATE TABLE salary_grade(
grade INT NOT NULL PRIMARY KEY,
min_salary INT,
max_salary INT
);

INSERT INTO salary_grade
VALUES (1, 800, 1300);

INSERT INTO salary_grade
VALUES (2, 1301, 1500);

INSERT INTO salary_grade
VALUES (3, 1501, 2100);

INSERT INTO salary_grade
VALUES (4, 2101, 3100);

INSERT INTO salary_grade
VALUES (5, 3101, 9999);
