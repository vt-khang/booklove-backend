import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: 'categories' })
export class Category extends Document {
  @Prop({ type: String, required: true, unique: true })
  keyword: string;

  @Prop({ type: String })
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);