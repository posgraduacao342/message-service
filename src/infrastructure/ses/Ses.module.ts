import { Module } from '@nestjs/common';
import { SesService } from './service/SesService';
import { SesServicePortKey } from './port/SesServicePort';

@Module({
  providers: [
    {
      provide: SesServicePortKey,
      useClass: SesService,
    },
  ],
  exports: [
    {
      provide: SesServicePortKey,
      useClass: SesService,
    },
  ],
})
export class SesModule {}
