const inquirer = require('inquirer')

function generateId(){
    return Math.floor(Math.random(1000))
}


function addDepartment(db){
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'department_name',
      message: 'Department Name: ',
    },
]).then((result) => {
    db.query(`INSERT INTO departments (department_name, id)
    VALUES(${result.department_name}, ${generateId()})`)
})
}


function addRole(db){
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'job_title',
        message: 'Job Title: ',
      },
      {
        type: 'input',
        name: 'department',
        message: 'Department: ',
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Yearly Salary: ',
      },
  ]).then((result) => {
      db.query(`INSERT INTO roles (job_title, id, department, salary)
    VALUES(${result.job_title}, ${generateId()}, ${result.department}, ${result.salary})`)
  })
}

function addEmployee(db){
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'first_name',
        message: 'First Name: ',
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'Last Name: ',
      },
      {
        type: 'input',
        name: 'role',
        message: 'Role: ',
      },
      {
        type: 'input',
        name: 'managers',
        message: 'Managers: ',
      },
  ]).then((result) => {
    db.query(`INSERT INTO employees (id, first_name, last_name, job_title, managers)
    VALUES(${generateId()}, ${result.first_name}, ${result.last_name}, ${result.job_title}, ${result.managers})`)
  })
}


function showDepartments(){
    db.query(`SELECT * FROM departments`,function (err, results) {
        console.log(results)
    })
}


function showRoles(){
    db.query(`SELECT * FROM roles`,function (err, results) {
        console.log(results)
    })
}


function showEmployees(){
    db.query(`SELECT * FROM employees`,function (err, results) {
        console.log(results)
    })
}


function mainMenu(db){
inquirer
  .prompt([
    {
      type: 'checkbox',
      name: 'main',
      message: 'What would you like to do?',
      choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
    },
]).then((result) => {
    switch (result.main){
        case "View all departments": showDepartments()
            break
        case "View all roles": showRoles()
            break
        case "View all employees": showEmployees()
            break
        case "Add a department": addDepartment(db)
            break
        case "Add a role": addRole(db)
            break
        case "Add an employee": addEmployee(db)
            break
        case "Update an employee role": showEmployees()
            break
}
}).then(() => (mainMenu(db)))
}

module.exports ={
  mainMenu,
  showRoles,
  showEmployees,
  showDepartments,
  addEmployee,
  addRole,
  addDepartment,
  generateId
}