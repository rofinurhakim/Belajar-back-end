//panggil mosule httpm
const http = require('http')

//buat sever node
const server = http.createServer(( req, res ) => {
    res.write('<h1>WELCOME WORD</h1>')

    res.end()
})


server.listen(3000)

console.log('server running on http://locahost:3000')