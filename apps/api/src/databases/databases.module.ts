import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// DB Connection
import { TypeOrmModule } from '@nestjs/typeorm';

// DB Entities
import { DemoModule } from '../demo/demo.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService]
    }),
    DemoModule
  ]
})
export class DatabasesModule {}
