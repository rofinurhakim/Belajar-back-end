const http = require ('http');
const express = require ('express')
const app = express()


const routerUsers = require('./router/users')
const routerIndex = require('./router/index')

app.use(routerUsers)
app.use(routerIndex)

const server = http.createServer(app)

server.listen (3000)