import { NextResponse } from 'next/server';

import { HTTP_STATUS_CODES, SUCCESS_MESSAGES } from '@/constants/response.constant';

class SuccessResponse {
  constructor({ statusCode, message, data = {}, metadata = {} }) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.metadata = metadata;
  }

  send() {
    const responseBody = {
      success: true,
      message: this.message,
      ...(Object.keys(this.data).length > 0 && { data: this.data }),
      ...(Object.keys(this.metadata).length > 0 && { metadata: this.metadata })
    };

    return NextResponse.json(responseBody, { status: this.statusCode });
  }
}

class OKResponse extends SuccessResponse {
  constructor({ message = SUCCESS_MESSAGES.OK, data = {}, metadata = {} }) {
    super({ statusCode: HTTP_STATUS_CODES.OK, message, data, metadata });
  }
}

class CreatedResponse extends SuccessResponse {
  constructor({ message = SUCCESS_MESSAGES.CREATED, data = {}, metadata = {} }) {
    super({ statusCode: HTTP_STATUS_CODES.CREATED, message, data, metadata });
  }
}

export { SuccessResponse, OKResponse, CreatedResponse };
