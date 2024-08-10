// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigAppModule } from './core/config/config.module';
import { DatabaseModule } from './core/database/database.module';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [DatabaseModule, ConfigAppModule, HealthModule],
})
export class AppModule {}
