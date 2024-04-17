const mongoose = require('mongoose');

const DBconnect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Products-app');
        console.log('Mongoose connected to MongoDB');

        mongoose.connection.once('error', (error) => {
            console.error('MongoDB connection error:', error);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = DBconnect;
