const express = require('express');
const app = express();
const PORT  = 8080
const  ConnectMongoose = require('./Connect')
const router = require('./routes/url')
const {urlModel} = require('./models/url')
const dotenv = require('dotenv')

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

ConnectMongoose(process.env.MONGODURL)

app.use('/gen' , router)

app.get('/redir/:shortID', (req, res) => {
    const { shortID } = req.params;
    const trimmedShortID = shortID.trim();
    urlModel.findOne({ shortID: trimmedShortID })
    .then((entry)=>{ 

           return res.redirect(entry.redirectURL)
        }
    )
    .catch((error)=>{
      return res.send("Server is Down")
    })

});
app.listen(PORT , ()=> console.log(`SERVER IS RUNNING ON ${PORT}`) )