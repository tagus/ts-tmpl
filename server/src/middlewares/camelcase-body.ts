import express from 'express';
import camelCaseKeys from 'camelcase-keys';

export default async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (req.body) {
    req.body = camelCaseKeys(req.body, { deep: true });
  }
  next();
};
