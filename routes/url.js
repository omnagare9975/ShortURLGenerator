const express = require('express')
const {CreateTheShortUrl} = require('../controllers/urlController')
const router = express.Router()

router.post('/' , CreateTheShortUrl)


module.exports = router
