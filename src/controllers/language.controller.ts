import { Controller, HttpStatus, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { LanguageService } from '../services/language.service';

@Controller('languages')
export class LanguageController {
  constructor(private languageService: LanguageService) { }

  @Get()
  async getLanguages(@Res() res: Response) {
    const languages: any = await this.languageService.getLanguages();
    return res.status(HttpStatus.OK).send(languages);
  }
}