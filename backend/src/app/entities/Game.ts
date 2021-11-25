import { Schema, model } from "mongoose";

export interface Game {
  game: string;
  type: string;
};

const schema = new Schema<Game>({
  game: { type: String, required: true, maxlength: 30 },
  type: { type: String, required: true, maxlength: 30 },
});

const GameEntity = model<Game>("Game", schema);

export default GameEntity;

