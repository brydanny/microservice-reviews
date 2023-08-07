import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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
}
