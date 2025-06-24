// //MongoDB connection
// const mongoose = require('mongoose');
// require('dotenv').config();

// function connectToDB(){
//     mongoose.connect(process.env.MONGO_URI).then(()=>{
//         console.log(("CONNECTED TO DB"));
//     })
// }

// module.exports = connectToDB;

//after tests integration

// MongoDB connection
const mongoose = require('mongoose');
require('dotenv').config();

let isConnected = false;

async function connectToDB() {
    if (isConnected) {
        // Prevent multiple connections in tests or hot reloads
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URI, {
        });
        isConnected = true;
        console.log("CONNECTED TO DB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
}

module.exports = connectToDB;