import { IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class CategoryReviewDto {
  @IsInt()
  @Min(1)
  @Max(10)
  @Type(() => Number)
  LIMPIEZA: number;

  @IsInt()
  @Min(1)
  @Max(10)
  @Type(() => Number)
  COMUNICACION: number;

  @IsInt()
  @Min(1)
  @Max(10)
  @Type(() => Number)
  LLEGADA: number;

  @IsInt()
  @Min(1)
  @Max(10)
  @Type(() => Number)
  FIABILIDAD: number;

  @IsInt()
  @Min(1)
  @Max(10)
  @Type(() => Number)
  UBICACION: number;

  @IsInt()
  @Min(1)
  @Max(10)
  @Type(() => Number)
  PRECIO: number;
}
