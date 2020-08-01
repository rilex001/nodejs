const http = require('http');

const express = require('express')


const app = express()

app.use( '/users' , (req, res, next) => {
    console.log('First middleware') 
    res.send('<h1>Users !</h1>')
 })

app.use('/info', (req, res, next) => {
    res.send('<h2>Info</h2>')
})

app.use('/details', (req, res, next) => {
    res.send('<h1>Details</h1>')
})

app.use( '/' , (req, res, next) => {
    console.log('In another middleware') 
    res.send('<h1>Hellow  World !</h1>')
 })

app.listen(3000)