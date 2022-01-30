//import mysql2 package
const mysql = require('mysql2');
//import console table
const cTable = require('console.table');
//import inquirer package for prompts
const inquirer = require('inquirer');



//================== Create Connection to MySQL database ==================
// create connection to the database (db)
const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'bootcamp1',
        database: 'tracker'
});
// open the MySQL connection
db.connect(function(err) {
    if (err) throw err;
    console.log('Connected to the tracker database!');
    menuOptions(); //start the menu options prompt
});
//================== ==================
//start app & given options to view all departments, roles, or employees; add a department, role, or employee; update an employee role  
const menuOptions = () => {
    inquirer
    .prompt ([
        {
            type: 'list',
            name: 'menu',
            message: 'Choose menu option:',
            choices: [
                'view all departments',
                'view all roles',
                'view all employees',
                'add a departent',
                'add a role',
                'add an employee',
                'update an employee role',
                'update a manager',
                'view employees by manager',
                'view employees by department',
                'delete a department',
                'delete a role',
                'delete an employee',
                'view total utilized budget of a department'
            ],
        }
    ])
    .then(answers => {
            //view all departments
            if (answers.menu === 'view all departments') {
                console.log("departments"); //placeholder for function
                viewDepartments();
            };
            if (answers.menu === 'view all roles') {
                console.log("view roles"); //placeholder for function
                viewRoles();
            };
            if (answers.menu  === 'view all employees') {
                console.log("view employees"); //placeholder for function
                viewEmployees();
            };
            if (answers.menu === 'add a department') {
                console.log("add department"); //placeholder for function
                addDepartment();
            };
            if (answers.menu === 'add a role') {
                console.log("add role"); //placeholder for function
                addRole();
            };
            if (answers.menu === 'add an employee') {
                console.log("add employee"); //placeholder for function
                addEmployee();
            };
            if (answers.menu === 'update an employee role') {
                console.log('update employee role'); //placeholder for function
                updateEmployee();
            };
            if (answers.menu === 'update a manager') {
                console.log('updated manager'); //placeholder for function
                updateManager();
            };
            if (answers.menu === 'view employees by manager') {
                console.log('viewing employees by manager'); //placeholder for function
                viewEmployeesByManager();
            };
            if (answers.menu === 'view employees by department') {
                console.log('viewing employees by department'); //placeholder for function
                viewEmployeesByDeparment();
            };
            if (answers.menu === 'delete a department') {
                console.log('deleted a department'); //placeholder for function
                deleteDepartment();
            };
            if (answers.menu === 'delete a role') {
                console.log('deleted a role'); //placeholder for function
                deleteRole();
            };
            if (answers.menu === 'delete an employee') {
                console.log('deleted an employee'); //placeholder for function
                deleteEmployee();
            };
            if (answers.menu === 'view total utilized budget of a department') {
                console.log('viewing total utilized budget of a department'); //placeholder for function
                viewDeparmentBudget();
            };
        })
    .catch((err) => {
        if (err) throw err;
    });
};
// choose view departments -> given formatted table showing deparment names & ids
const viewDepartments = () => {
    console.log('Viewing all departments:');
    // department table -> department id & department name
    const sql =  
    `   SELECT department_name AS department
        FROM department
        INNER JOIN role
        ON department.id = roles.department_id;
    `; 
    
    db.query(sql, (err, data) => {
        if (err) throw err;
        console.table(data);
    });
    
};
// choose view roles -> given job title, role id, department of role, salary for role
const viewRoles = () => {
    console.log('Viewing all employee roles:');

};
// choose view employees -> given table showing employee data (ids, first & last names, job title, deparments, salaries, and their managers)
const viewEmployees = () => {
    console.log('Viewing all employees:');

};
// choose add department --> prompted to enter name of department & it's added to database
const addDepartment = () => {
    console.log('Added a departments:');

};
// choose add role -> prompted to enter name, salary, department of role and role is added to db
const addRole = () => {
    console.log('Added a role:');

};
// choose add employee -> prompted to enter their 1st & last name, role, manager & then employee is added to db
const addEmployee = () => {
    console.log('Added an employee:');

};
// choose update employee role -> prompted to select employee to update & their new role & this info is updated in the db
const updateEmployee = () => {
    console.log('Updated an employee:');
};
// update a manager
const updateManager = () => {
    console.log('Added a manager:');
};
// view employees by manager
const viewEmployeesByManager = () => {
    console.log('Viewing employees by manager:');
};
// view employees by department
const viewEmployeesByDeparment = () => {
    console.log('Viewing employees by department:');
};
// delete a department
const deleteDepartment = () => {
    console.log('Deleted a departments:');
};
// delete a role 
const deleteRole = () => {
    console.log('Deleted an role:');
};
// delete an employee
const deleteEmployee = () => {
    console.log('Deleted an employee:');
};
// View the total utilized budget of a department—in other words, the combined salaries of all employees in that department
const viewDeparmentBudget = () => {
    console.log('Viewing total utilized department budget:');
};