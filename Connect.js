const mongoose = require('mongoose')


const ConnectMongoose = async (uri) => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};


module.exports = ConnectMongoose