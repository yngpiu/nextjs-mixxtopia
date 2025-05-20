import { ERROR_MESSAGES, HTTP_STATUS_CODES } from '@/constants/response.constant';

export class ErrorResponse extends Error {
  constructor(statusCode, message) {
    super(message);
    this.status = statusCode;
    this.name = new.target.name;
    Error.captureStackTrace?.(this, this.constructor);
  }
}

export class ValidationError extends ErrorResponse {
  constructor(errors = []) {
    super(HTTP_STATUS_CODES.BAD_REQUEST, ERROR_MESSAGES.VALIDATION_FAILED);
    this.errors = errors;
  }
}

export class BadRequestError extends ErrorResponse {
  constructor(message = ERROR_MESSAGES.BAD_REQUEST) {
    super(HTTP_STATUS_CODES.BAD_REQUEST, message);
  }
}

export class UnauthorizedError extends ErrorResponse {
  constructor(message = ERROR_MESSAGES.UNAUTHORIZED) {
    super(HTTP_STATUS_CODES.UNAUTHORIZED, message);
  }
}

export class ForbiddenError extends ErrorResponse {
  constructor(message = ERROR_MESSAGES.FORBIDDEN) {
    super(HTTP_STATUS_CODES.FORBIDDEN, message);
  }
}

export class NotFoundError extends ErrorResponse {
  constructor(message = ERROR_MESSAGES.NOT_FOUND) {
    super(HTTP_STATUS_CODES.NOT_FOUND, message);
  }
}

export class ConflictError extends ErrorResponse {
  constructor(message = ERROR_MESSAGES.CONFLICT) {
    super(HTTP_STATUS_CODES.CONFLICT, message);
  }
}
