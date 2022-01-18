--file for table creation
CREATE TABLE department (
    --id column is to be an integer that auto increments and acts as the primary key:
    id INT PRIMARY KEY AUTO_INCREMENT,
    --max of 30 characters and has to have a value(can't be null): 
    name VARCHAR(30) NOT NULL 
);

CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT
);

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    --hold reference to another employee that's manager of current employee (null if has no manager)
    manager_id INT, 
);
