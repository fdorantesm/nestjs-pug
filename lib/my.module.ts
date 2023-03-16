import { Module } from '@nestjs/common';

import { MY_SERVICE_TOKEN } from './my.constants';
import { MyService } from './my.service';

@Module({
  providers: [
    {
      provide: MY_SERVICE_TOKEN,
      useClass: MyService
    }
  ],
  exports: [MyService]
})
export class MyModule {}
