import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Language, LanguageSchema } from '../entities/language.entity';
import { LanguageController } from '../controllers/language.controller';
import { LanguageService } from '../services/language.service';
import { LanguageRepository } from '../repositories/language.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Language.name, schema: LanguageSchema }])],
  controllers: [LanguageController],
  providers: [LanguageService, LanguageRepository],
  exports: [LanguageService, LanguageRepository],
})
export class LanguageModule { }