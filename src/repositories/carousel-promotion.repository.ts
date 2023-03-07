import { InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarouselPromotion } from '../entities/carousel-promotion.entity';

export class CarouselPromotionRepository {
  constructor(@InjectModel(CarouselPromotion.name) private readonly carouselPromotionModel: Model<CarouselPromotion>) { }

  async getCarouselPromotions() {
    let carouselPromotions: CarouselPromotion[];
    try {
      carouselPromotions = await this.carouselPromotionModel.find().exec();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    return carouselPromotions;
  }
}