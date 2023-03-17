const connection = require('../database');

function getAvg (req, response) {
    let sql = "SELECT AVG(mark), first_name, last_name FROM school.marks as m join students as s ON(m.student_id = s.student_id) WHERE s.student_id = 1;=" + req.query.id;
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
}

module.exports = {getAvg}