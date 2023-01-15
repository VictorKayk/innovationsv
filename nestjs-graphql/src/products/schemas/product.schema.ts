import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true, enum: ['ACTIVE', 'INACTIVE'], default: 'ACTIVE' })
  status: string;

  @Prop({ required: true, default: 0, min: 0 })
  quantity: number;

  @Prop({ required: true, default: Date.now })
  created_at: Date;

  @Prop({ default: null })
  updated_at: Date;

  @Prop({ default: null })
  deleted_at: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
