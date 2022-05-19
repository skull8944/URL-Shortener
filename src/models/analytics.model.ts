import mongoose, { Document } from "mongoose";
import { ShortURL } from "./shortURL.model";

interface Analytics extends Document {
  shortUrl: ShortURL
}

const schema = new mongoose.Schema(
  {
    shortUrl: {
      type: mongoose.Types.ObjectId,
      ref: "shortUrl",
      required: true
    }
  },
  { timestamps: true }
);

const analytics = mongoose.model<Analytics>("analytics", schema);

export default analytics;