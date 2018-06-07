const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const routes = require('./routes/routes')

const server = express()

const hbsConfig = {
  defaultLayout: 'main',
  extname: 'hbs'
}


server.engine('hbs', hbs(hbsConfig))
server.set('view engine', 'hbs')

server.use(express.urlencoded({ extended: false }))
server.use(express.static(path.join(__dirname, 'public')))
server.use('/', routes)

module.exports = server
