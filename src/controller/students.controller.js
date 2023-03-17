const connection = require('../database');

function getStart(req, res) {
    let result = {error: true, code: 200, message: 'Starting point'};
    res.send(result);
}

function getStudent(req, res) {
    let sql;
    if (req.query.id == null) {
        sql = "SELECT * FROM students";
    }
    else {
        sql = "SELECT * FROM students WHERE student_id=" + req.query.id;
    }
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
}

function postStudent(req, response) {
    console.log(req.body);
    let sql = "INSERT INTO students (first_name, last_name, id_group, join_year)" + " VALUES ('" + req.body.first_name + "', '" + req.body.last_name + "', " + req.body.id_group + ", '" + req.body.join_year + "');";
    console.log(sql);
    connection.query(sql, (err, res) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(res);
            if (res.insertId) {
                response.send(String(res.insertId));
            }
            else {
                response.send("-1");
            }
        }
    })
}

function putStudent(req, response) {
    let params = [req.body.first_name,
                  req.body.last_name,
                  req.body.id_group,
                  req.body.join_year,
                  req.body.student_id]

    let sql = "UPDATE students SET first_name = COALESCE(?, first_name), last_name = COALESCE(?, last_name), id_group = COALESCE(?, id_group), join_year = COALESCE(?, join_year) WHERE (`student_id` = ?);"
    // console.log(sql);
    connection.query(sql, params, (err, res) => {
        if (err) {
            console.log(err);
        }
        else {
            response.send(res);
        }
    })
}

function delStudents (req, response) {
    let params = [req.body.student_id]
    let sql = "DELETE FROM students WHERE (student_id = ?);"
    connection.query(sql, params, (err,res) => {
        if (err) {
            console.log(err);
        }
        else {
            Response.send(res);
        }
    })
}

module.exports = {getStart, getStudent, postStudent, putStudent, delStudents}