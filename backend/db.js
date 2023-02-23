const mongoose = require("mongoose");  //npm i -g nodemon
const mongoURI = "mongodb://localhost:27017/?directConnection=true";
mongoose.set("strictQuery", true); //so that no error
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongo");
  });
};
module.exports = connectToMongo;
