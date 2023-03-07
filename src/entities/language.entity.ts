import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: 'languages' })
export class Language extends Document {
  @Prop({ type: String, required: true, unique: true })
  keyword: string;

  @Prop({ type: String })
  name: string;
}

export const LanguageSchema = SchemaFactory.createForClass(Language);