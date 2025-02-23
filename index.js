const express = require('express');
const app = express();
const PORT  = 8080
const  ConnectMongoose = require('./Connect')
const router = require('./routes/url')
const {urlModel} = require('./models/url')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

ConnectMongoose('mongodb://127.0.0.1:27017/urlshortner')

app.use('/gen' , router)

app.get('/redir/:shortID' , async(req ,res)=>{
    const {shortID} = req.params
    const entry = await urlModel.findOneAndUpdate(
        {shortID},
        {$push : {visitedHistory: {
            timestamps: Date.now()
        }}}
    )
    res.redirect(entry.redirectURL)

})
app.listen(PORT , ()=> console.log(`SERVER IS RUNNING ON ${PORT}`) )