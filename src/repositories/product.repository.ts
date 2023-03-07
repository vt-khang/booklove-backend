import { InternalServerErrorException, NotFoundException, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { GetQueryDto } from '../dto/getQueryDto';
import { Product } from '../entities/product.entity';

export class ProductRepository {
  constructor(@InjectModel(Product.name) private readonly productModel: Model<Product>) { }

  async getProducts(query: GetQueryDto) {
    let page = query.page || 0;
    page = Number(page);

    let limit = query.limit || 0;
    limit = Number(limit);

    let q = query.q || '';
    let lang: string | string[] = query.lang;
    let genre: string | string[] = query.genre;

    let sort: string = query.sort;

    let products: Product[];

    try {
      if (typeof lang === 'string') {
        lang = lang.split(';');
      }

      if (typeof genre === 'string') {
        genre = genre.split(';');
      }

      if (limit === 0) {
        if (lang) {
          if (genre) {
            if (sort === 'asc') {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                  "language.keyword": { $in: lang },
                  genres: {
                    $elemMatch: {
                      keyword: { $in: genre },
                    }
                  },
                })
                .skip(page * limit)
                .sort({ price: 1 })
                .exec();
            } else if (sort === 'desc') {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                  "language.keyword": { $in: lang },
                  genres: {
                    $elemMatch: {
                      keyword: { $in: genre },
                    }
                  },
                })
                .skip(page * limit)
                .sort({ price: -1 })
                .exec();
            } else {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                  "language.keyword": { $in: lang },
                  genres: {
                    $elemMatch: {
                      keyword: { $in: genre },
                    }
                  },
                })
                .skip(page * limit)
                .exec();
            }
          } else {
            if (sort === 'asc') {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                  "language.keyword": { $in: lang },
                })
                .skip(page * limit)
                .sort({ price: 1 })
                .exec();
            } else if (sort === 'desc') {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                  "language.keyword": { $in: lang },
                })
                .skip(page * limit)
                .sort({ price: -1 })
                .exec();
            } else {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                  "language.keyword": { $in: lang },
                })
                .skip(page * limit)
                .exec();
            }
          }
        } else {
          if (genre) {
            if (sort === 'asc') {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                  genres: {
                    $elemMatch: {
                      keyword: { $in: genre },
                    }
                  },
                })
                .skip(page * limit)
                .sort({ price: 1 })
                .exec();
            } else if (sort === 'desc') {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                  genres: {
                    $elemMatch: {
                      keyword: { $in: genre },
                    }
                  },
                })
                .skip(page * limit)
                .sort({ price: -1 })
                .exec();
            } else {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                  genres: {
                    $elemMatch: {
                      keyword: { $in: genre },
                    }
                  },
                })
                .skip(page * limit)
                .exec();
            }
          } else {
            if (sort === 'asc') {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                })
                .skip(page * limit)
                .sort({ price: 1 })
                .exec();
            } else if (sort === 'desc') {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                })
                .skip(page * limit)
                .sort({ price: -1 })
                .exec();
            } else {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                })
                .skip(page * limit)
                .exec();
            }
          }
        }
      } else {
        if (lang) {
          if (genre) {
            if (sort === 'asc') {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                  "language.keyword": { $in: lang },
                  genres: {
                    $elemMatch: {
                      keyword: { $in: genre },
                    }
                  },
                })
                .skip(page * limit)
                .limit(limit)
                .sort({ price: 1 })
                .exec();
            } else if (sort === 'desc') {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                  "language.keyword": { $in: lang },
                  genres: {
                    $elemMatch: {
                      keyword: { $in: genre },
                    }
                  },
                })
                .skip(page * limit)
                .limit(limit)
                .sort({ price: -1 })
                .exec();
            } else {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                  "language.keyword": { $in: lang },
                  genres: {
                    $elemMatch: {
                      keyword: { $in: genre },
                    }
                  },
                })
                .skip(page * limit)
                .limit(limit)
                .exec();
            }
          } else {
            if (sort === 'asc') {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                  "language.keyword": { $in: lang },
                })
                .skip(page * limit)
                .limit(limit)
                .sort({ price: 1 })
                .exec();
            } else if (sort === 'desc') {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                  "language.keyword": { $in: lang },
                })
                .skip(page * limit)
                .limit(limit)
                .sort({ price: -1 })
                .exec();
            } else {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                  "language.keyword": { $in: lang },
                })
                .skip(page * limit)
                .limit(limit)
                .exec();
            }
          }
        } else {
          if (genre) {
            if (sort === 'asc') {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                  genres: {
                    $elemMatch: {
                      keyword: { $in: genre },
                    }
                  },
                })
                .skip(page * limit)
                .limit(limit)
                .sort({ price: 1 })
                .exec();
            } else if (sort === 'desc') {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                  genres: {
                    $elemMatch: {
                      keyword: { $in: genre },
                    }
                  },
                })
                .skip(page * limit)
                .limit(limit)
                .sort({ price: -1 })
                .exec();
            } else {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                  genres: {
                    $elemMatch: {
                      keyword: { $in: genre },
                    }
                  },
                })
                .skip(page * limit)
                .limit(limit)
                .exec();
            }
          } else {
            if (sort === 'asc') {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                })
                .skip(page * limit)
                .limit(limit)
                .sort({ price: 1 })
                .exec();
            } else if (sort === 'desc') {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                })
                .skip(page * limit)
                .limit(limit)
                .sort({ price: -1 })
                .exec();
            } else {
              products = await this.productModel
                .find({
                  keyword: { $regex: q, $options: 'i' },
                })
                .skip(page * limit)
                .limit(limit)
                .exec();
            }
          }
        }
      }

      let total: number = 0;

      if (lang) {
        if (genre) {
          total = await this.productModel
            .find({
              keyword: { $regex: q, $options: 'i' },
              "language.keyword": { $in: lang },
              genres: {
                $elemMatch: {
                  keyword: { $in: genre },
                }
              },
            })
            .count()
            .exec();
        } else {
          total = await this.productModel
            .find({
              keyword: { $regex: q, $options: 'i' },
              "language.keyword": { $in: lang },
            })
            .count()
            .exec();
        }
      } else {
        if (genre) {
          total = await this.productModel
            .find({
              keyword: { $regex: q, $options: 'i' },
              genres: {
                $elemMatch: {
                  keyword: { $in: genre },
                }
              },
            })
            .count()
            .exec();
        } else {
          total = await this.productModel
            .find({
              keyword: { $regex: q, $options: 'i' },
            })
            .count()
            .exec();
        }
      }

      let response;

      if (products.length > 0) {
        response = {
          total,
          page,
          limit,
          q,
          data: products,
        }
      } else {
        response = {
          total,
          page,
          limit,
          q,
          data: [],
        }
      }
      return response;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getProductByKeyword(keyword: String) {
    let product: Product;
    try {
      product = await this.productModel.findOne({ keyword: keyword }).exec();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    if (!product) {
      throw new NotFoundException('The product with this keyword does not exist');
    }

    return product;
  }

  async getTopProducts() {
    let products: Product[];
    try {
      products = await this.productModel.find().limit(8).exec();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    return products;
  }
}