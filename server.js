const inquirer = require('inquirer')
const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

// view all departments


// view all roles


// view all employees


// add a department


// add a role


// add an employee


// update employee role



// Query database
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});