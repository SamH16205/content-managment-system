const inquirer = require('inquirer')
const mysql = require('mysql2');
const helpers = require('./assets/js/index')

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

inquirer
  .prompt([
    {
      type: 'list',
      name: 'main',
      message: 'What would you like to do?',
      choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
    }
]).then((result) => {
    switch (result.main){
        case "View all departments": helpers.showDepartments(db)
            break
        case "View all roles": helpers.showRoles(db)
            break
        case "View all employees": helpers.showEmployees(db)
            break
        case "Add a department": inquirer.prompt(helpers.add_department).then((result) => helpers.addDepartment(db, result)).then(() => console.log("Department added to database"))
            break
        case "Add a role": inquirer.prompt(helpers.add_role).then((result) => helpers.addRole(db, result)).then(() => console.log("Role added to database"))
            break
        case "Add an employee": inquirer.prompt(helpers.add_employee).then((result) => helpers.addEmployee(db, result)).then(() => console.log("Employee added to database"))
            break
        case "Update an employee role": inquirer.prompt(helpers.add_department)
            break
}})
