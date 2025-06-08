import { CustomError } from '@/shared/errors';
import express, { ErrorRequestHandler } from 'express';
import StatusCodes from 'http-status-codes';

interface JsonResponse {
  failed: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

const handleError: ErrorRequestHandler = (
  err,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
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
    res.send('500 An error occurred');
    return;
  }

  const payload: JsonResponse = { failed: true, message: err.message };
  res.status(status).json(payload);
};

export default handleError;
