import { InternalServerErrorException, NotFoundException } from '@nestjs/common';
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

  async getCategoryByKeyword(keyword: String) {
    let category: Category;
    try {
      category = await this.categoryModel.findOne({ keyword: keyword }).exec();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    if (!category) {
      throw new NotFoundException('The category with this keyword does not exist');
    }

    return category;
  }
}