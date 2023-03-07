import { IsOptional } from "class-validator";
import { Schema as MongooseSchema } from 'mongoose';

export class GetQueryDto {
  @IsOptional()
  id: MongooseSchema.Types.ObjectId;

  @IsOptional()
  page?: number;

  @IsOptional()
  limit?: number;

  @IsOptional()
  q?: string;

  @IsOptional()
  lang?: string;

  @IsOptional()
  genre?: string;

  @IsOptional()
  sort?: string;
}