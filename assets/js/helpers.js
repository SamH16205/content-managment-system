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
        message: 'Department: ',
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
            message: 'Role: ',
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
          message: 'New role: ',
        },
      ]

function generateId(){
    return Math.floor(Math.random()*1000000)
}

function addDepartment(db, employee){
    db.query(`INSERT INTO departments (department_name, id)
    VALUES("${employee.department_name}", ${generateId()})`)
}


function addRole (db, employee){
    db.query(`INSERT INTO roles (job_title, id, department, salary)
    VALUES("${employee.job_title}", ${generateId()}, "${employee.department}", "${employee.salary}")`)
}

function addEmployee(db, employee){
  db.query(`INSERT INTO employees (id, first_name, last_name, job_title, department, salary, managers)
  VALUES(${generateId()}, "${employee.first_name}", "${employee.last_name}", "${employee.role}", "placeholder", "5200000", "${employee.managers}");`)
}

function showDepartments(db){
    db.query(`SELECT * FROM departments`,function (err, results) {
        console.log(results)
    })
}

function showRoles(db){
    db.query(`SELECT * FROM roles`,function (err, results) {
        console.log(results)
    })
}

function showEmployees(db){
    db.query(`SELECT * FROM employees`,function (err, results) {
        console.log(results)
    })
}

function updateEmployee(db, employee){
  db.query(`
  UPDATE employees 
  SET job_title="${employee.new_role}"
  WHERE id="${employee.id}";`)
}

module.exports ={
  showRoles,
  showEmployees,
  showDepartments,
  addEmployee,
  addRole,
  addDepartment,
  generateId,
  updateEmployee,
  add_department,
  add_employee,
  add_role,
  update_employee
}