const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://bms1:test123@cluster0.4aympzf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Connection to MongoDB was successful");
});