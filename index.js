// todo: foregin primary keys
// todo: log data in table format

const inquirer = require('inquirer')
const mysql = require('mysql2');
const helpers = require('./assets/js/helpers')

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Austin101',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

function main(){
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'main',
        message: 'What would you like to do?',
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
      }
  ]).then((result) => {
          if(result.main === "View all departments"){
            helpers.showDepartments(db)
            main()
          }
          if(result.main === "View all roles"){
            helpers.showRoles(db)
            main()
          }
          if(result.main === "View all employees"){
            helpers.showEmployees(db)
            main()
          }
          if(result.main === "Add a department"){
            inquirer.prompt(helpers.add_department).then((result) => helpers.addDepartment(db, result)).then(() => console.log("Department added to database.")).then(() => main())
          }
          if(result.main === "Add a role"){
            inquirer.prompt(helpers.add_role).then((result) => helpers.addRole(db, result)).then(() => console.log("Role added to database")).then(()=>main())
          }
          if(result.main === "Add an employee"){
            inquirer.prompt(helpers.add_employee).then((result) => helpers.addEmployee(db, result)).then(()=>console.log("Employee added to database")).then(() => main())
          }
          if(result.main === "Update an employee role"){
            inquirer.prompt(helpers.update_employee).then((result)=>helpers.updateEmployee(db, result)).then(()=>console.log("Employee role updated.")).then(() => main())
          }
  })
  }


main()