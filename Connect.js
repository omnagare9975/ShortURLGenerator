const mongoose = require('mongoose')


const ConnectMongoose = (url) =>{
    return mongoose.connect(url)
    .then(()=> console.log(`DB is Connected !`))
    .catch((error) => console.log(`Failed to Connect DB ${error}`))
}


module.exports = ConnectMongoose