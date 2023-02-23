const mongoose = require("mongoose");  //npm i -g nodemon
const mongoURI = "mongodb://127.0.0.1:27017/?directConnection=true";
mongoose.set("strictQuery", true); //so that no error
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongo");
  });
};
module.exports = connectToMongo;
