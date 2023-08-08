import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CategoryReview } from '../../domain/model/review-guest/category';

export class CreateReviewGuestDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: `property comentario` })
  readonly comentario: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `property identifier huespedId` })
  readonly huespedId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `property identifier hostId` })
  readonly hostId: string;

  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => CategoryReview)
  @ApiProperty({ type: CategoryReview })
  categoryReview: CategoryReview;
}
