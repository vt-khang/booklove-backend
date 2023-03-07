import { Injectable } from "@nestjs/common";
import { Schema as MongooseSchema } from 'mongoose';
import { GetQueryDto } from "../dto/getQueryDto";
import { ProductRepository } from "../repositories/product.repository";

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) { }

  async getProducts(getQueryDto: GetQueryDto) {
    return await this.productRepository.getProducts(getQueryDto);
  }

  async getProductByKeyword(keyword: String) {
    return await this.productRepository.getProductByKeyword(keyword);
  }

  async getTopProducts() {
    return await this.productRepository.getTopProducts();
  }
}