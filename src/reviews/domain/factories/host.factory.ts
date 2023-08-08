import { Injectable } from '@nestjs/common';
import { iHost } from './iHost';
import { Host } from '../model/host/host.model';

@Injectable()
export class HostFactory implements iHost {
  createHost(name: string, ciudad: string, pais: string) {
    return new Host(name, ciudad, pais);
  }
}
