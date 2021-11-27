import { Schema, model } from "mongoose";
export interface Game {
  name: string;
  type: string;
  description: string;
};

const schema = new Schema<Game>({
  name: { type: String, required: true, maxlength: 40 },
  type: { type: String, required: true, maxlength: 40 },
  description: { type: String, required: true, maxlength: 100 }
});

const GameEntity = model<Game>("Game", schema);

export default GameEntity;

