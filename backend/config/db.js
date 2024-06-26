const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  const url =
    "mongodb+srv://najeeb08089:zktr08089NJB+mdb@cluster0.h5sh4rh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "Real_Time_Chat_App",
    })
    .then(() => console.log("Connected to DB"))
    .catch((e) => console.log("Error", e));
};

module.exports = connectDB;
