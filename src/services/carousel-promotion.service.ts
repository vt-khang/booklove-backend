import { CarouselPromotionRepository } from '../repositories/carousel-promotion.repository';
import { Injectable } from "@nestjs/common";

@Injectable()
export class CarouselPromotionService {
  constructor(private carouselPromotionRepository: CarouselPromotionRepository) { }

  async getCarouselPromotions() {
    return await this.carouselPromotionRepository.getCarouselPromotions();
  }
}