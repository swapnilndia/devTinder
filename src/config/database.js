const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://swapnil240695:GccqsA35Ve5CxuyG@namastenode.lufb6.mongodb.net/devTinder"
  );
};
module.exports = { connectDB };
