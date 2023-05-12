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

helpers.mainMenu()