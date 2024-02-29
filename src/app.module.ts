import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ApplicationModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
