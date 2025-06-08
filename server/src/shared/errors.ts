import HttpStatusCodes from 'http-status-codes';

export abstract class CustomError extends Error {
  public readonly httpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor(msg: string, httpStatus: number) {
    super(msg);
    this.httpStatus = httpStatus;
  }
}

export class UnexpectedError extends CustomError {
  public static readonly status = HttpStatusCodes.INTERNAL_SERVER_ERROR;

  constructor(msg = 'an unexpected error occurred') {
    super(msg, UnexpectedError.status);
  }
}

export class NotFoundError extends CustomError {
  public static readonly msg = '404 not found';
  public static readonly status = HttpStatusCodes.NOT_FOUND;

  constructor(msg: string = NotFoundError.msg) {
    super(msg, NotFoundError.status);
  }
}
