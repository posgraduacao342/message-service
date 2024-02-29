import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { ConfigModule } from '@nestjs/config';
import { RabbitMqModule } from './infrastructure/rabbitMQ/RabbitMQ.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ApplicationModule,
    RabbitMqModule,
  ],
})
export class AppModule {}
