import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePropertyDto {
  @IsNotEmpty()
  @ApiProperty({ description: `property id ` })
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `property name` })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `property address` })
  readonly address: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `property type` })
  readonly typeProperty: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `property city` })
  readonly city: string;
}
