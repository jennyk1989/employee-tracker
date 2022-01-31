INSERT INTO department (id, department_name)
VALUES  
(1, "Defense Against the Dark Arts"),
(2, "Charms"),
(3, "Muggle Studies"),
(4, "Potions"),
(5, "Transfiguration");

INSERT INTO role (id, title, salary, department_id)
VALUES
(1, "Minister of Magic", 550000, 111),
(2, "Auror", 380000, 222),
(3, "Healer", 250000, 333),
(4, "Unspeakable", 200000, 444),
(5, "Junior Minister", 180000, 555);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, "Hermione", "Granger", 11100, 11),
(2, "Harry", "Potter", 22299, 22),
(3, "Luna", "Lovegood", 33388, 33),
(4, "Lucius", "Malfoy", 44477, 44),
(5, "Ron", "Weasley", 55566, 55);


