const express = require('express')

const app = express()

app.use((req, res, next) => {
    req.body = "hello from delta"
    next()
})

app.get('/', (req, res) => {
    res.send("hello, world")
})
app.listen(3333, () => {
    console.log("server is running in port 3333")
})