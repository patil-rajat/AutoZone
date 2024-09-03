const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'xxxxxxxx',
  database: 'cars',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});
