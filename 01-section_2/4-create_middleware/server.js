const express = require('express')

const app = express()

app.use((req, res, next) => {
    req.hello = "hello and welcome from egypt"
    next()
})
app.get('/', (req, res) => {
    res.send(req.hello)
})
app.get('/check', (req, res) => {
    if (req.hello && 
        req.hello === "hello and welcome from egypt")
        res.send("you has a middleware")
})
app.listen(3333, () => {
    console.log("server is running in port 3333")
})