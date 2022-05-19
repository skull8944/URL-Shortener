import mongoose, { Document } from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0987654321", 6); // 製造id (元素, size)

// for 程式
export interface ShortURL extends Document {
  shortId: string;
  destination: string;
}

// for DB
const schema = new mongoose.Schema({
  shortId: {
    type: String,
    unique: true,
    required: true,
    default: () => nanoid()
  },
  destination: {
    type: String,
    required: true
  }
});

const shortURL = mongoose.model<ShortURL>("shortUrl", schema);

export default shortURL;