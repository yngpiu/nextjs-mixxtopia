import { NextResponse } from 'next/server.js';

import { ERROR_MESSAGES, HTTP_STATUS_CODES } from '@/constants/response.constant.js';
import { ErrorResponse, ValidationError } from './errors.js';

export const asyncHandler = handler => {
  return async (...args) => {
    try {
      return await handler(...args);
    } catch (err) {
      if (err?.name === 'ZodError' && Array.isArray(err.errors)) {
        const formatted = err.errors.map(e => ({
          path: e.path,
          message: e.message
        }));
        return errorResponse(new ValidationError(formatted));
      }

      if (err instanceof ErrorResponse) {
        return errorResponse(err);
      }

      console.error('[UNHANDLED ERROR]', err);

      return errorResponse(
        new ErrorResponse(
          HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
          ERROR_MESSAGES.INTERNAL_SERVER_ERROR
        )
      );
    }
  };
};

const errorResponse = error => {
  const payload = {
    success: false,
    message: error.message,
    ...(error.errors && { errors: error.errors })
  };

  return NextResponse.json(payload, { status: error.status });
};
