import { InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from '../entities/category.entity';

export class CategoryRepository {
  constructor(@InjectModel(Category.name) private readonly categoryModel: Model<Category>) { }

  async getCategories() {
    let categories: Category[];
    try {
      categories = await this.categoryModel.find().sort({ keyword: 1 }).exec();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    return categories;
  }
}