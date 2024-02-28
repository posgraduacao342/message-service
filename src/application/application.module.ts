import { Module } from '@nestjs/common';
import { MensagemController } from './controllers/MensagemController';

@Module({
  imports: [],
  controllers: [MensagemController],
  providers: [],
})
export class ApplicationModule {}
