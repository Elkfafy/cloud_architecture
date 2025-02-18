const http = require('http')

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === '/')
    {
        res.writeHead(200, {
            "content-type": "text/plain"
        })
        res.end("hello world")
    }
})

server.listen(3333, () => {
    console.log("server is running in port 3333")
})