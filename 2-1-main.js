module.exports = (app)=>{
    app.get('/'  , (req, res)=>{
        res.render('index.html')
    })

    app.get('/more',  (req, res)=>{
        res.render('more.html')
    })

}