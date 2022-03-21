SELECT * FROM staff
WHERE salary < 5000;

UPDATE staff set salary = 2000 
WHERE name LIKE 'a%'