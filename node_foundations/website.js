//const e = require('express')
const http = require('http')
const fs= require('fs')
const port=process.env.PORT ||3000
const server = http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/html')
    if (req.url == '/') {
        res.end('<h1>THIS IS NOOB </h1>')
    }
    else if (req.url == '/about'){
        res.end('<h1>about section hai</h2>')
    }
    else if (req.url == '/template'){
        const data=fs.readFileSync('index.html')
        res.end(data.toString())
    }
    else{
        res.end('<h3>invalid url hai !</h3>')
    }
})

server.listen(port,() =>{
    console.log(`server is listening on port ${port}`)
})