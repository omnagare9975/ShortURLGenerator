const { urlModel } = require('../models/url')
const shortid = require('shortid')
const CreateTheShortUrl = async (req , res ) =>{
    const {url} = req.body
    if (!url){
        return res.status(400).json({Error: 'Pass The URL'})
    }

    const genShort = shortid.generate()
    await urlModel.create({
        shortID : genShort,
        redirectURL: url,
        visitedHistory: [],
    })

    return res.json({shortID : genShort })

}


module.exports = {CreateTheShortUrl,}