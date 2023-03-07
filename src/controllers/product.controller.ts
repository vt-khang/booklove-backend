import { Controller, HttpStatus, Get, Query, Param, Res } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Response } from 'express';
import { Connection, Schema as MongooseSchema } from 'mongoose';
import { GetQueryDto } from '../dto/getQueryDto';
import { ProductService } from '../services/product.service';

@Controller('products')
export class ProductController {
  constructor(@InjectConnection() private readonly mongoConnection: Connection, private productService: ProductService) { }

  @Get()
  async getProducts(@Query() getQueryDto: GetQueryDto, @Res() res: any) {
    const products: any = await this.productService.getProducts(getQueryDto);
    return res.status(HttpStatus.OK).send(products);
  }

  @Get(':keyword')
  async getProductByKeyword(@Param('keyword') keyword: String, @Res() res: Response) {
    const product: any = await this.productService.getProductByKeyword(keyword);
    return res.status(HttpStatus.OK).send(product);
  }

  @Get('rank/top')
  async getTopProducts(@Res() res: Response) {
    const products: any = await this.productService.getTopProducts();
    return res.status(HttpStatus.OK).send(products);
  }
}