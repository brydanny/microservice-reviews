import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHuespedDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `property name` })
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: `property ciudad` })
  readonly ciudad: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: `property pais` })
  readonly pais: string;
}
