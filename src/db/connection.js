const mongoose = require("mongoose");
require("dotenv").config();

Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  } catch (error) {
    console.log(error);
  }
};

const closeConnection = () => {
  mongoose.disconnect();
};

Connection();

module.exports = {
  closeConnection,
};
