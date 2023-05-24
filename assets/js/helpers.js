const add_department = [
  {
      type: 'input',
      name: 'department_name',
      message: 'Department name: '
  }
  ]
  
  const add_role = [
      {
        type: 'input',
        name: 'job_title',
        message: 'Job Title: ',
      },
      {
        type: 'input',
        name: 'department',
        message: 'Department ID: ',
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Yearly Salary: ',
      },
  ]
  
      const add_employee = [
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
            message: 'Role ID: ',
          },
          {
            type: 'input',
            name: 'managers',
            message: 'Managers: ',
          },
      ]

      const update_employee = [
        {
          type: 'input',
          name: 'id',
          message: 'Employee ID number: ',
        },
        {
          type: 'input',
          name: 'new_role',
          message: 'New role ID: ',
        },
      ]

function addDepartment(db, employee){
    db.query(`INSERT INTO departments (department_name)
    VALUES("${employee.department_name}")`)
}


function addRole (db, employee){
    db.query(`INSERT INTO roles (title, department_id, salary)
    VALUES("${employee.job_title}", ${employee.department}, ${employee.salary})`)
}

function addEmployee(db, employee){
  db.query(`INSERT INTO employees (first_name, last_name, role_id,  managers)
  VALUES("${employee.first_name}", "${employee.last_name}", "${employee.role}", "${employee.managers}");`)
}

function showDepartments(db){
    db.query(`SELECT * FROM departments`,function (err, results) {
        printTable(results)
    })
}

function showRoles(db){
    db.query(`SELECT roles.id, roles.title, roles.salary, departments.department_name AS department FROM roles
    INNER JOIN departments ON roles.department_id=departments.id`,function (err, results) {
      printTable(results)
  })
}

function showEmployees(db){
    db.query(`SELECT employees.id, employees.first_name, employees.last_name, roles.salary, roles.title AS role, employees.managers FROM employees
    INNER JOIN roles ON employees.role_id=roles.id;`,function (err, results) {
        printTable(results)
    })
}

function updateEmployee(db, employee){
  db.query(`
  UPDATE employees 
  SET role_id="${employee.new_role}"
  WHERE id="${employee.id}";`)
}

function printTable(obj){
//   console.log(`\nID     Name     Role     Salary      Managers`)
//   for (let item of employees){
//   console.log(`${item.id}    ${item.first_name + ' ' + item.last_name}    ${item.job_title}    ${item.salary}   ${item.managers}`)
// }
console.log('\n')
console.table(obj)
}

module.exports ={
  showRoles,
  showEmployees,
  showDepartments,
  addEmployee,
  addRole,
  addDepartment,
  updateEmployee,
  add_department,
  add_employee,
  add_role,
  update_employee
}