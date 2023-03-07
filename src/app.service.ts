import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello() {
    try {
      return 'OK';
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
