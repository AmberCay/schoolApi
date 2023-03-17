const {Router} = require('express');
const router = Router();
const studentsCTRL = require('../controller/students.controller');

router.get("/", studentsCTRL.getStart)

router.get("/students", studentsCTRL.getStudent)

router.post("/students", studentsCTRL.postStudent)

router.put("/students", studentsCTRL.putStudent)

router.delete("/students", studentsCTRL.delStudents)

module.exports = router