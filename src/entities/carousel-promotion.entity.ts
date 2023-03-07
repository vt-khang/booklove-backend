import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: 'carousel-promotion' })
export class CarouselPromotion extends Document {
  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: String })
  url: string;
}

export const CarouselPromotionSchema = SchemaFactory.createForClass(CarouselPromotion);