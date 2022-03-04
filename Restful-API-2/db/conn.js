const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cricket')
        .then(() => console.log("Connection Successful"))
        .catch((err) => console.log("Error Detected"))
        