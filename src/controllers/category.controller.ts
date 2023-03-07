import { Controller, HttpStatus, Get, Res } from '@nestjs/common';
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
}