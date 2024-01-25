import { IsString, IsNotEmpty, IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CategoryReviewDto } from './category-review.dto';

export class CreateReviewDto {
  @IsString()
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
  @Type(() => CategoryReviewDto)
  @ApiProperty({ type: CategoryReviewDto })
  categoryReview: CategoryReviewDto;
}
