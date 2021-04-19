const http = require('http')

http.createServer(( req, res ) => {
    if(req.url === '/') {
        res.write('WELCOME TO PARADIS')
        res.end();

    } else if (req.url === '/users') {
        res.write('<html>')
        res.write('<ul>')
        res.write('<li>Users 1 </li>')
        res.write('<li>Users 2 </li>')
        res.write('<li>Users 3 </li>')
        res.write('<li>Users 4 </li>')
        res.write('<html>')
        res.end();
    }
})

.listen(4000)

console.log('server running on http://locahost:4000')