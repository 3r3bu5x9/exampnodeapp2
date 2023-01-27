const db = require('../db')
const utils = require('../utils')
const express = require('express')
const router = express.Router()

router.post('/addStudent', (request, response) => {
    const {s_name, password, course, passing_year, prn_no, dob} = request.body

    const query = 'insert into student ( s_name, password, course, passing_year, prn_no, dob ) values(?,?,?,?,?,?)'
    db.pool.execute(query, [s_name, password, course, passing_year, prn_no, dob], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.get('/displayStudent/:student_id', (request, response) => {
    const query = 'select student_id, s_name, password, course, passing_year, prn_no, dob from student where student_id = ?'
    db.pool.execute(query, [student_id] ,(error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.put('/updateStudent/:student_id', (request, response) => {
    const {student_id} = request.params;
    const {course, prn_no} = request.body

    const query = 'update student set course = ?, prn_no = ? where student_id = ?';

    db.pool.execute(query, [course, prn_no, student_id], (error, result) => {
        response.send(utils.createResult(error, result));
    })
})

router.delete("/deleteStudent/:student_id", (request, response) => {
    const {student_id} = request.params;
    const query =
        "delete from student where student_id = ?";

    db.pool.execute(query, [student_id], (error, result) => {
        response.send(utils.createResult(error, result));
    });
});

module.exports = router
