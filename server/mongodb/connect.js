import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true); // for matching search fonctionality
  mongoose
    .connect(url) // connect to db
    .then(() => console.log("connected to mongo")) // connect success
    .catch((err) => {
      console.error("failed to connect with mongo"); //connect failed
      console.error(err);
    });
};

export default connectDB;
