//import mysql2 package
const mysql = require('mysql2');
//import console table
const cTable = require('console.table');
//import inquirer package for prompts
const inquirer = require('inquirer');
const { error } = require('console');

//================== Create Connection to MySQL database ==================
const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tracker'
});

db.connect(function(err) {
    if (err) throw err;
    console.log('Connected to the tracker database!');
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
                'update an employee role'
            ]
        }
    ])
    .then((answers) => {
        const { menuChoice } = answers;
        //view all departments
        if (menuChoice === 'view all departments') {
            console.log("departments"); //placeholder for function
        };
        if (menuChoice === 'view all roles') {
            console.log("view roles"); //placeholder for function
        };
        if (menuChoice === 'view all employees') {
            console.log("view employees"); //placeholder for function
        };
        if (menuChoice === 'add a department') {
            console.log("add department"); //placeholder for function
        };
        if (menuChoice === 'add a role') {
            console.log("add role"); //placeholder for function
        };
        if (menuChoice === 'add an employee') {
            console.log("add employee"); //placeholder for function
        };
        if (menuChoice === 'update an employee role') {
            console.log(departments); //placeholder for function
        };
    })
    .catch((error) => {

    })
}
// choose view departments -> given formatted table showing deparments names & ids

// choose view roles -> given job title, role id, department of role, salary for role

// choose view employees -> given table showing employee data (ids, first & last names, job title, deparments, salaries, and their managers)

// choose add department --> prompted to enter name of department & it's added to database

// choose add role -> prompted to enter name, salary, department of role and role is added to db

// choose add employee -> prompted to enter their 1st & last name, role, manager & then employee is added to db

// choose update employee role -> prompted to select employee to update & their new role & this info is updated in the db
