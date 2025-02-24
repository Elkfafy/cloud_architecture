const express = require('express')
const { getAllStudents, getStudentById, addStudent, updateStudent, removeStudent } = require('./studentHandler')
const app = express()

app.use(express.json())

app.get('/api/students/', (req, res) => {
    res.json(getAllStudents())
})

app.get('/api/students/:id', (req, res) => {
    const id = req.params.id
    const student = getStudentById(id)
    if (student) {
        res.json(student)
        return
    }
    res.status(404).json("student is not found")
})

app.post('/api/students/', (req, res) => {
    const newStudent = req.body
    const student = addStudent(newStudent)
    res.json(student)
})

app.put('/api/students/:id', (req, res) => {
    const id = req.params.id
    const newStudent = req.body
    const index = updateStudent(id, newStudent)
    if (index >= 0)
    {
        res.json("student at index = " + index + " has been updated")
        return
    }
    res.status(404).json("student is not found")
})

app.delete('/api/students/:id', (req, res) => {
    const id = req.params.id
    const index = removeStudent(id)
    if (index >= 0)
    {
        res.json("student at index = " + index + " has been deleted")
        return
    }
    res.status(404).json("student is not found")
})

app.listen(3333, () => {
    console.log("server is running on port 3333")
})