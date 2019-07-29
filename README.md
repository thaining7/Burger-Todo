# Project Title

## Burger App

### Create your own delicious burgers, Save them, then delete them.

https://burger-todo.herokuapp.com/

# Motivation

### This application demonstrates basic CRUD database operations

# Tech Used
## Built With: 

* MVC structure
* ORM
* CRUD
* Node.js
* Express
* MySQL
* jQuery
* Handlebars.js

# Features

* MySQL database
* Create, Update and Delete operations
* ORM

# Code Example

### Inserting a new burger into the database using the ORM:

```
var orm = {
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    ...
}

### Express Router POST to burger API route

router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
            req.body.burger_name, false
        ], function (result) {
            res.json({ id: result.insertId });
        });
});
```

# How to use?

#### Simply enter a burger of your choice into the add a burger box. It will then populate the non-devoured box, where you can then devour the burger. Devoured burgers can then be deleted.
