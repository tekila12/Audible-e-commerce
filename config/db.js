const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://audible:audible@cluster0.lmeyw.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;