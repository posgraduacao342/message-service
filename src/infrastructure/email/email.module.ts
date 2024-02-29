import { Module } from '@nestjs/common';
import { ResendService } from './service/ResendService';
import { EmailPortKey } from './port/EmailPort';

@Module({
  providers: [
    {
      provide: EmailPortKey,
      useClass: ResendService,
    },
  ],
  exports: [
    {
      provide: EmailPortKey,
      useClass: ResendService,
    },
  ],
})
export class EmailModule {}
