const mongoose = require("mongoose");

// const connectString =
//   "mongodb+srv://Yash:Yash@003@nodeexpressprojects.lkbnn.mongodb.net/taskManagerApi?retryWrites=true&w=majority";


const dbContents = (url) => {
    return mongoose
    .connect(url, {   
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,})
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = dbContents;
