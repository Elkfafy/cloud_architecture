const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/')
    {
        const indexPage = fs.readFileSync('./index.html', 'utf-8')
        res.writeHead(200, 'ok', {
            "content-type": "text/html"
        })
        res.end(indexPage)
    } else if (req.method === 'GET' && req.url === '/index.css')
    {
        const stylePage = fs.readFileSync('index.css', 'utf-8')
        res.writeHead(200, 'ok', {
            "content-type": "text/css"
        })
        res.end(stylePage)
    }
})

server.listen(3333, () => {
    console.log("server is running in port 3333")
})