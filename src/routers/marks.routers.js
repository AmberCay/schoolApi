const {Router} = require('express');
const router = Router();
const marksCTRL = require('../controller/marks.controller');

router.get("/marks", marksCTRL.getAvg)

module.exports = router