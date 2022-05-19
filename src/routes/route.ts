import { Router, Request, Response } from "express";
import { createShortUrl, getAnalytics, getShortUrl, handleRedirect } from "../controllers/shortURL.controller";
import validateResource from "../middlewares/validateResourse";
import shortUrlSchema from "../schemas/createShortURL.schema"

const router = Router();

// test
router.get('/', (req: Request, res: Response) => {
  res.sendStatus(200);
});

router.post('/api/url',validateResource(shortUrlSchema) , createShortUrl);
router.get('/:shortId', handleRedirect);
router.get('/api/analytics', getAnalytics);
router.get("/api/url/:shortId", getShortUrl);

export default router;