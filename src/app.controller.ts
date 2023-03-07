import { Controller, HttpStatus, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getHello(@Res() res: Response) {
    const storages: any = await this.appService.getHello();
    return res.status(HttpStatus.OK).send(storages);
  }
}
