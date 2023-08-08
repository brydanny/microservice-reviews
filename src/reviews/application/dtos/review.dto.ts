import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CategoryReview } from '../../domain/valueObjects/category-review.valueObject';

export class CreateReviewDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: `property comentario` })
  readonly comentario: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `property identifier propertyId` })
  readonly propertyId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `property identifier huespedId` })
  readonly huespedId: string;

  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => CategoryReview)
  @ApiProperty({ type: CategoryReview })
  categoryReview: CategoryReview;
}
