import { Request, Response } from "express";
import shortURL from "../models/shortURL.model";
import analytics from "../models/analytics.model";

export async function createShortUrl (req: Request, res: Response) {
  // get the dest from the req body
  const { destination } = req.body;

  const  newUrl = await shortURL.create({ destination });

  return res.send(newUrl);
}

export async function handleRedirect (req: Request, res: Response) {
  const { shortId } = req.params;

  const short = await shortURL.findOne({ shortId }).lean(); // short => <ShortUrl> => shortId, destination

  if (!short) {
    return res.sendStatus(404);
  }

  await analytics.create({ shortUrl: short._id });

  return res.redirect(short.destination);
}

export async function getAnalytics (req: Request ,res: Response) {
  const data = await analytics.find({}).lean();

  return res.send(data);
}

export async function getShortUrl(req: Request, res: Response) {
  const { shortId } = req.params;
  const short = await shortURL.findOne({ shortId }).lean();

  if (!short) {
    return res.sendStatus(404);
  }

  return res.json(short);
}