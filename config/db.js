const mongoose = require("mongoose"); // call mangoose

const config = require("config"); // call config

const db = config.get("mongoURI"); // get the db from config

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    }); // it returns a promise so we want to await for that
    console.log("Mango db connected");
  } catch (err) {
    console.log(err.message);
    // exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
