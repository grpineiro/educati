import { Schema, model } from "mongoose";

export interface Admin {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  birth: Date;
};

const schema = new Schema<Admin>({
  first_name: { type: String, required: true, maxlength: 30},
  last_name: { type: String, required: true, maxlength: 30 },
  email: { type: String, required: true, unique: true,  },
  password: { type: String, required: true },
  birth: { type: Date, required: true, max: new Date() }
});

const AdminEntity = model<Admin>("Admin", schema);

export default AdminEntity;

