import { Schema, model, Callback } from "mongoose";
import { Response } from "express";
import bcrypt from "bcrypt";

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  birth: Date;
};

const schema = new Schema<User>({
  first_name: { type: String, required: true, maxlength: 100 },
  last_name: { type: String, required: true, maxlength: 100 },
  email: { type: String, required: true, unique: true, },
  password: { type: String, required: true },
  birth: { type: Date, required: true, max: new Date() }
});

schema.pre('save', function(next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

schema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => err ? cb(err) : cb(null, isMatch));;
};

const UserEntity = model<User>("User", schema);

export default UserEntity;

