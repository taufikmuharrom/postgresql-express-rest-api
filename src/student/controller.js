const pool = require('../../db');
const query = require('./queries')

const getStudents = (req, res) => {
    pool.query(query.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const addStudents = (req, res) => {
    const { name, age, email, dob } = req.body
    pool.query(query.checkEmailIsExist, [email], (error, results) => {
        const studentExist = results.rows.length;
        if (studentExist) {
            res.send("Email already exists.");
        } else {
            pool.query(query.addStudents, [name, age, email, dob], (error, results) => {
                if (error) throw error;
                res.status(201).send("Student Created!");
                console.log("Student Created");
            })
        }
    })
}

const updateStudents = (req, res) => {
    const id = parseInt(req.params.id)
    const { name } = req.body;
    pool.query(query.getStudentById(id), (error, results) => {
        const notStudentFound = !results.rows.length;
        if (notStudentFound) {
            res.send("Student does not exist in the database.");
        } else {
            pool.query(query.updateStudents, [name,id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Student updated successfully.")
            })
        }

    })
}

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id)
    if (!Number.isInteger(id)) res.status(404).send('Id is not found.');
    pool.query(query.getStudentById(id), (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

const removeStudent = (req, res) => {
    const id = parseInt(req.params.id)
    if (!Number.isInteger(id)) res.status(404).send('Id is not found.');
    pool.query(query.getStudentById(id), (error, results) => {
        const notStudentFound = !results.rows.length;
        if (notStudentFound) {
            res.send("Student does not exist in the database.");
        } else {
            pool.query(query.removeStudent, [id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Student removed successfully.")
            })
        }

    })

}

module.exports = {
    getStudents,
    getStudentById,
    addStudents,
    updateStudents,
    removeStudent
}