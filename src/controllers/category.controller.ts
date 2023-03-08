import { Controller, HttpStatus, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { CategoryService } from '../services/category.service';

@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) { }

  @Get()
  async getCategories(@Res() res: Response) {
    const categories: any = await this.categoryService.getCategories();
    return res.status(HttpStatus.OK).send(categories);
  }

  @Get(':keyword')
  async getCategoryByKeyword(@Param('keyword') keyword: String, @Res() res: Response) {
    const category: any = await this.categoryService.getCategoryByKeyword(keyword);
    return res.status(HttpStatus.OK).send(category);
  }
}