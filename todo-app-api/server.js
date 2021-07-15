const express = require("express");
const app = express();
const { Pool } = require('pg');

const secret = require("./secret.json")

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const pool = new Pool(secret);

/*GET all todos*/

app.get("/todos", function (req, res){
    pool.query('SELECT * FROM todos', (error, result) => {
        res.json(result.rows);
    });
  });

/*GET a todo by id*/
app.get("/todos/:todoId", function (req, res) {
    const todoId = req.params.todoId;
  
    pool
      .query("SELECT * FROM todos WHERE id=$1", [todoId])
      .then((result) => res.json(result.rows))
      .catch((e) => console.error(e));
  });

app.listen(3001, function() {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});