const mysql = require("mysql2");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Amber160897",
    database: "school",
});

connection.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Connected correctly.");
    }
});

module.exports = connection