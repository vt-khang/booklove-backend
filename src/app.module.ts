import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { ProductModule } from './modules/product.module';
import { CategoryModule } from './modules/category.module';
import { LanguageModule } from './modules/language.module';
import { CarouselPromotionModule } from './modules/carousel-promotion.module';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => configService.getMongoConfig(),
    }),
    ProductModule,
    CategoryModule,
    LanguageModule,
    CarouselPromotionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
