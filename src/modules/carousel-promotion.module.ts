import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarouselPromotion, CarouselPromotionSchema } from '../entities/carousel-promotion.entity';
import { CarouselPromotionController } from '../controllers/carousel-promotion.controller';
import { CarouselPromotionService } from '../services/carousel-promotion.service';
import { CarouselPromotionRepository } from '../repositories/carousel-promotion.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: CarouselPromotion.name, schema: CarouselPromotionSchema }])],
  controllers: [CarouselPromotionController],
  providers: [CarouselPromotionService, CarouselPromotionRepository],
  exports: [CarouselPromotionService, CarouselPromotionRepository],
})
export class CarouselPromotionModule { }