const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mango connected to ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

//.Use this in server.js to connect to mango and start the server
// const startServer = async () => {
//   try {
//     await connectDB();
//   } catch (error) {
//     console.log(error);
//   }
// };

// startServer();
