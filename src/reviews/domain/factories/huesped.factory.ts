import { Injectable } from '@nestjs/common';
import { iHuesped } from './iHuesped';
import { Huesped } from '../model/huesped/huesped.model';

@Injectable()
export class HuespedFactory implements iHuesped {
  createHuesped(name: string, ciudad: string, pais: string) {
    return new Huesped(name, ciudad, pais);
  }
}
