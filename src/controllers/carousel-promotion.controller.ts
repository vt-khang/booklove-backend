import { Controller, HttpStatus, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { CarouselPromotionService } from '../services/carousel-promotion.service';

@Controller('carousel-promotion')
export class CarouselPromotionController {
  constructor(private carouselPromotionService: CarouselPromotionService) { }

  @Get()
  async getCarouselPromotions(@Res() res: Response) {
    const carouselPromotions: any = await this.carouselPromotionService.getCarouselPromotions();
    return res.status(HttpStatus.OK).send(carouselPromotions);
  }
}