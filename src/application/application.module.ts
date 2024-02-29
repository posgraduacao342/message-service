import { Module } from '@nestjs/common';
import { MensagemController } from './controllers/MensagemController';
import { EmailModule } from 'src/infrastructure/ses/email.module';

@Module({
  imports: [EmailModule],
  controllers: [MensagemController],
  providers: [],
})
export class ApplicationModule {}
