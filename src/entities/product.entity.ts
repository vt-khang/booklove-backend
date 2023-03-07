import { raw, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: 'products' })
export class Product extends Document {
  @Prop({ type: String, required: true, unique: true })
  keyword: string;

  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  image: string;

  @Prop({ type: String })
  arthur: string;

  @Prop({ type: Number })
  price: number;

  @Prop({
    type: [raw({
      keyword: { type: String },
      name: { type: String }
    })]
  })
  genres: Record<string, string>[];

  @Prop(raw({
    keyword: { type: String },
    name: { type: String }
  }))
  language: Record<string, string>;

  @Prop({ type: String })
  description: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);