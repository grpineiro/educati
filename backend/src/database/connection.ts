import mongoose from "mongoose";

const connection = async () => {

  const mongoURL = "mongodb://127.0.0.1/educati";

  return await mongoose.connect(mongoURL)
    .then(() => {
      console.log("Connected at database.")
    })
    .catch(e => console.error(e));


}

connection();

export default connection;
