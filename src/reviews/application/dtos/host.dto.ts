import { IsString, IsNotEmpty, IsNumber, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHostDto {
  @IsNotEmpty()
  @ApiProperty({ description: `host id ` })
  readonly id: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `host name` })
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: `host ciudad` })
  readonly ciudad: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: `host pais` })
  readonly pais: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail({}, { message: 'El formato del email no es válido' })
  @ApiProperty({ description: `host email` })
  readonly email: string;
}
