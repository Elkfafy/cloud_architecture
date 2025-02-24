const students = []

const getAllStudents = () => {
    return students
}

const getStudentById = (id) => {
    for (let student of students)
    {
        if (student.id == id)
        {
            return student
        }
    }
    return null
}

const addStudent = (student) => {
    student.id = students[students.length - 1]?.id + 1 || 0
    students.push(student)
    return student
}

const removeStudent = (id) => {
    for (let index = 0; index < students.length; index++)
    {
        if (students[index].id == id)
        {
            students.splice(index, 1)
            return index
        }
    }
    return -1
}
const updateStudent = (id, newStudent) => {
    for (let index = 0; index < students.length; index++) {
        if (students[index].id == id)
        {
            students[index] = {...students[index], ...newStudent}
            return index
        }
    }
    return -1
}
module.exports = {
    getAllStudents,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudent
}