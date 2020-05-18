import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { DemoService } from './demo.service';
import { Demo } from './demo.entity';

@Controller('demo')
export class DemoController {

  constructor(private service: DemoService) { }

  @Get(':id')
  get(@Param() params) {
      return { message: 'Hello, api!' };
  }

  @Post()
  create(@Body() demo: Demo) {
      return this.service.postDemo(demo);
  }

  @Put()
  update(@Body() user: Demo) {
      return this.service.updateDemo(user);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
      return this.service.deleteDemo(params.id);
  }
}
