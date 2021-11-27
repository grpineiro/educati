import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

export interface Admin {
  id: string
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  birth: Date;
  isAdmin: boolean;
};

const schema = new Schema<Admin>({
  first_name: { type: String, required: true, maxlength: 30 },
  last_name: { type: String, required: true, maxlength: 30 },
  email: { type: String, required: true, unique: true, },
  password: { type: String, required: true },
  birth: { type: Date, required: true, max: new Date() },
  isAdmin: { type: Boolean, default: true }
});

schema.pre('save', function(next) {
  const admin = this;

  // only hash the password if it has been modified (or is new)
  if (!admin.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(admin.password, salt, function(err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      admin.password = hash;
      next();
    });
  });
});

schema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => err ? cb(err) : cb(null, isMatch));
};

const AdminEntity = model<Admin>("Admin", schema);

export default AdminEntity;
