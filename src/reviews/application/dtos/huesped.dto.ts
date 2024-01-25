import { IsString, IsNotEmpty, IsNumber, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHuespedDto {
  @IsNotEmpty()
  @ApiProperty({ description: `huesped id ` })
  readonly id: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `huesped name` })
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: `huesped ciudad` })
  readonly ciudad: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: `huesped pais` })
  readonly pais: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail({}, { message: 'El formato del email no es válido' })
  @ApiProperty({ description: `huesped email` })
  readonly email: string;
}
