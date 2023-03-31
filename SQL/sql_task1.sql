SELECT * 
FROM employees;

SELECT salary
FROM employees;

SELECT DISTINCT job_name
FROM employees;

SELECT emp_name, CONCAT("$", "  ", ROUND(salary*1.15)) AS salary
FROM employees;

SELECT CONCAT(emp_name, "  ", job_name) AS 'Employee & Job'
FROM employees;

SELECT emp_id, emp_name, salary, DATE_FORMAT(hire_date, "%M %d,%Y") AS to_char
FROM employees;

SELECT LENGTH(TRIM(emp_name)) AS length
FROM employees;

SELECT emp_id,  salary, commission
FROM employees;

SELECT  DISTINCT dep_id,  job_name
FROM employees;

SELECT  *
FROM employees
WHERE dep_id NOT IN(2001);

SELECT *
FROM employees
WHERE hire_date < "1991-01-01";

SELECT AVG(salary) AS average
FROM employees 
WHERE job_name = "ANALYST";

SELECT *
FROM employees 
WHERE emp_name = "Blaze";

SELECT *
FROM employees
WHERE salary * 1.25 > 3000;

SELECT *
FROM employees
WHERE DATE_FORMAT(hire_date, "%m") = 01;

SELECT emp_id, emp_name, hire_date, salary
FROM employees
WHERE  hire_date < "1991-04-01";

SELECT e.emp_name, e.salary
FROM employees e, salary_grade s
WHERE e.emp_name = 'FRANK'
  AND e.salary BETWEEN s.min_salary AND s.max_salary
  AND e.salary = s.max_salary ; 
  
SELECT *
FROM employees 
WHERE job_name != "MANAGER" OR "PRESIDENT"
ORDER BY salary, emp_name;

SELECT MAX(salary) AS max
FROM employees;

SELECT job_name, AVG(salary) AS avg, AVG(salary + commission) AS avg
FROM employees
GROUP BY (job_name);

SELECT e.emp_id,
	   e.emp_name,
       d.dep_id,
       d.dep_location,
       d.dep_name 
FROM employees e, departments d
WHERE e.dep_id = d.dep_id 
AND e.dep_id 
IN (1001,2001);


SELECT manager_id, COUNT(manager_id) AS count
FROM employees 
WHERE manager_id
GROUP BY manager_id 
ORDER BY manager_id ASC;

SELECT dep_id, 
	COUNT(*) FROM employees 
GROUP BY dep_id 
HAVING COUNT(*)>=2;

SELECT *
FROM employees 
WHERE emp_name LIKE "%AR%";

ALTER TABLE employees
ADD Gender VARCHAR(10);

UPDATE employees 
SET gender='male' 
WHERE emp_id=68319;

UPDATE employees 
SET gender='female'
WHERE emp_id=66928;

UPDATE employees
SET gender='female'
WHERE emp_id=67832;

UPDATE employees
SET gender='male'
WHERE emp_id=65646;

UPDATE employees 
SET gender='female'
WHERE emp_id=67858;
 
UPDATE employees
SET gender='male'
WHERE emp_id=69062;
 
UPDATE employees
SET gender='male'
WHERE emp_id=63679;

UPDATE employees
SET gender='male'
WHERE emp_id=66564;

 
UPDATE employees
SET gender='male' 
WHERE emp_id=64989;

UPDATE employees
SET gender='male'
WHERE emp_id=65271;
 
UPDATE employees
SET gender='male'
WHERE emp_id=68454;
 
UPDATE employees
SET gender='male'
WHERE emp_id=68736;
 
UPDATE employees
SET gender='male'
WHERE emp_id=69000;
 
UPDATE employees
SET gender='male'
WHERE emp_id=69324;



