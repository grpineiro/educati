import mongoose from "mongoose";
require("dotenv").config();

const connection = async () => {

  const mongoURL = `${process.env.DB_HOST}/${process.env.DB_NAME}`

  return await mongoose.connect(mongoURL)
    .then(() => {
      console.log("Connected at database.")
    })
    .catch(e => console.error(e));


}

connection();

export default connection;
