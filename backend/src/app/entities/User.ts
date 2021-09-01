import { Schema, model } from "mongoose";

interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  birth: Date;
};

const schema = new Schema<User>({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  birth: { type: Date, required: true }
});

const UserEntity = model<User>("User", schema);

export default UserEntity;

