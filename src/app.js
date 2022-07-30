const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mysql = require('mysql2')
const myConnection = require('express-myconnection')
const app = express ()
const playerRoutes = require('./routes/player')
require('dotenv').config()
console.log(process.env.HOST,process.env.DATABASE_USER,process.env.PASSWORD,process.env.DATABASE, process.env.DATABASE_PORT)
// settings
app.set('port', process.env.PORT || 3001)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//midlewares
app.use(morgan('dev'))
app.use(myConnection(mysql, {
    multipleStatements: true,
    host: process.env.HOST,
    user: process.env.DATABASE_USER,
    password: process.env.PASSWORD,
    port: 3306,
    database: process.env.DATABASE
}, 'single'))
app.use(express.urlencoded({extended: false}))

// routes
app.use('/', playerRoutes)


//Static Files

app.use(express.static(path.join(__dirname, '/public')))

app.listen(app.get('port'), ()=>{
    console.log(`Server iniciado en ${app.get('port')}`)
})