import { Module } from '@nestjs/common';
import { MensagemController } from './controllers/MensagemController';
import { EmailModule } from 'src/infrastructure/email/email.module';
import { EmailConsumer } from './consumers/EmailConsumer';

@Module({
  imports: [EmailModule],
  controllers: [MensagemController],
  providers: [EmailConsumer],
})
export class ApplicationModule {}
