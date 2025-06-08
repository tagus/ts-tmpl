import express, { ErrorRequestHandler } from 'express';
import StatusCodes from 'http-status-codes';

import { CustomError } from '@/utils/errors';
import {isDevelopment} from '@/config/env'

interface JsonResponse {
  failed: boolean;
  message: string;
  stacktrace?: any;
  errors?: Record<string, string[]>;
}

const handleError: ErrorRequestHandler = (
  err,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  console.error(err);

  const isDev = isDevelopment();

  const status = err instanceof CustomError ? err.httpStatus : StatusCodes.INTERNAL_SERVER_ERROR;
  res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  if (req.accepts('text/html')) {
    switch (status) {
      case StatusCodes.NOT_FOUND:
        next();
        return;
      default:
        break;
    }

    const msg = isDev ? `500 Internal Server Error: ${err.message}` : '500 Internal Server Error';
    res.send(msg);
    return;
  }

  const payload: JsonResponse = { 
    failed: true, 
    message: err.message,
    stacktrace: isDev ? err.stack : undefined, 
  };
  res.status(status).json(payload);
};

export default handleError;
