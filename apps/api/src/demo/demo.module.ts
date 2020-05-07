
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemoService } from './demo.service';
import { DemoController } from './demo.controller';
import { Demo } from './demo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Demo])],
  providers: [DemoService],
  controllers: [DemoController],
})

export class DemoModule { }
