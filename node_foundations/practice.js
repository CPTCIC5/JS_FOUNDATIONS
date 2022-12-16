/*
const eventListener=require('events')
class Eventlistener extends eventListener {}

const myEmittor= new Eventlistener()
myEmittor.on('Completed',() =>{
    console.log('hogya emit! YAYaya')
    setTimeout(() => {
        console.log('aakhir m 2 sec baad aaung')
    }, 2000);
})

myEmittor.emit('Completed')*/

const http = require('http');
const port = process.env.PORT ||3000
const server = http.createServer((req,res) =>{
    res.statusCode=200
    res.setHeader('Content-Type','text/html')
})

