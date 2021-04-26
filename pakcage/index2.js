
const http = require('http')


const server = http.createServer(( req, res ) => {
    res.write('<h1>WELCOME WORD</h1>')

    res.end()
})


server.listen(4000)

console.log('server running on http://locahost:4000')