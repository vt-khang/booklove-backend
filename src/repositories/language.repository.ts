import { InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Language } from '../entities/language.entity';

export class LanguageRepository {
  constructor(@InjectModel(Language.name) private readonly languageModel: Model<Language>) { }

  async getLanguages() {
    let languages: Language[];
    try {
      languages = await this.languageModel.find().sort({ keyword: 1 }).exec();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    return languages;
  }
}