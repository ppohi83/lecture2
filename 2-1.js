var express = require("express")
var app =express()
var router=require('./2-1main')(app)
app.set('views' , __dirname+'/views')
app.set('view engine' , 'ejs')
app.engine('html' ,require('ejs').renderFile)
app.use('/static' , express.static(_dirname + '/public'))
app.listen(3000, ()=>{
    console.log("웹 서버가 실행되었다.http://127.0.0.1.3000")
})

