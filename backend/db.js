const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/?directConnection=true";
mongoose.set("strictQuery", true);
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log(" to mongo");
  });
};
module.exports = connectToMongo;
