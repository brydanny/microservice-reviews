import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
// import { CreateDetailDto } from './detail.dtos';
// import { CreateCustomizedDto } from './customized.dtos';

export class CreateReviewDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: `number og guests` })
  readonly comentario: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `property identifier` })
  readonly propertyId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `property identifier` })
  readonly huespedId: string;
}
