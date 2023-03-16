import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MyService {
  constructor() {
    Logger.log(`${MyService.name} initialized`, MyService.name);
  }
}
