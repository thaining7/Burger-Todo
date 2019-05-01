var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

var orm = {
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        });
    },
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
    // insertOne: function(tableName, tablecol1, tablecol2, burgerName, cb) {
    //     var queryString = "INSERT INTO ?? (??, ??) values (?, false)";
    //     connection.query(queryString, [tableName, tablecol1, tablecol2, burgerName], function(err, result) {
    //         if (err) {
    //             throw err;
    //         }
    //         console.log(result);
    //         cb(result);
    //     });
    // },
    // updateOne: function (tableName, keyFieldName, keyFieldVal, cb) {
    //     var queryString = "UPDATE ?? SET devoured = true WHERE ?? = ?";
    //     connection.query(queryString, [tableName, keyFieldName, keyFieldVal], function (err, result) {
    //         if (err) {
    //             throw err;
    //         }
    //         console.log(result);
    //         cb(result);
    //     });
    // }
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
}

module.exports = orm;
//call insertOne("burger", "burger_name", "devoured", formfieldvalue);

