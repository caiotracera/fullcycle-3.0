const express = require("express");
const mysql = require("mysql");
const { faker } = require("@faker-js/faker");

const app = express();
const port = 3000;

const mysqlConfig = {
  host: "node_challenge_mysql",
  user: "root",
  password: "docker",
  database: "challenge",
};

app.get("/", (req, res) => {
  const name = faker.person.firstName();
  const connection = mysql.createConnection(mysqlConfig);

  connection.connect();
  connection.query(`INSERT INTO people(name) VALUES ('${name}')`);

  connection.end();

  res.send(
    `<h1>Full Cycle Rocks!</h1><br/>
    <p>Nome inserido: ${name}</p>`
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
