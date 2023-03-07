import { Injectable } from "@nestjs/common";
import { LanguageRepository } from '../repositories/language.repository';

@Injectable()
export class LanguageService {
  constructor(private languageRepository: LanguageRepository) { }

  async getLanguages() {
    return await this.languageRepository.getLanguages();
  }
}