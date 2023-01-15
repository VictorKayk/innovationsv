import { Field } from '@nestjs/graphql';
import {
  MinLength,
  IsString,
  IsNumber,
  IsIn,
  Min,
  IsOptional,
} from 'class-validator';

export class CreateProductInput {
  @Field()
  @IsString()
  @MinLength(2)
  name: string;

  @Field()
  @IsString()
  @MinLength(2)
  category: string;

  @Field()
  @IsOptional()
  @IsNumber()
  @Min(0)
  quantity?: number;

  @Field()
  @IsString()
  @IsOptional()
  @IsIn(['ACTIVE', 'INACTIVE'])
  status?: 'ACTIVE' | 'INACTIVE';
}

export class UpdateProductInput {
  @Field()
  @IsString()
  id: string;

  @Field()
  @IsOptional()
  @IsString()
  @MinLength(2)
  name: string;

  @Field()
  @IsOptional()
  @IsString()
  @MinLength(2)
  category: string;

  @Field()
  @IsOptional()
  @IsNumber()
  @Min(0)
  quantity?: number;

  @Field()
  @IsString()
  @IsOptional()
  @IsIn(['ACTIVE', 'INACTIVE'])
  status?: 'ACTIVE' | 'INACTIVE';
}
