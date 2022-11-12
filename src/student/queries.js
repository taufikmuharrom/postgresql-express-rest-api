const getStudents = "SELECT * FROM students";
const getStudentById = (id) => `SELECT * FROM students WHERE id=${id}`;
const checkEmailIsExist = 'SELECT s FROM students s WHERE s.email = $1';
const addStudents = 'INSERT INTO students (name, age, email, dob) VALUES ($1,$2,$3,$4)';
const removeStudent = 'DELETE FROM students WHERE id = $1';
const updateStudents = 'UPDATE students SET name = $1 WHERE id = $2';

module.exports = {
    getStudents,
    getStudentById,
    checkEmailIsExist,
    addStudents,
    removeStudent,
    updateStudents
}