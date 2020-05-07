import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Demo } from './demo.entity';

@Injectable()
export class DemoService {
  constructor(
    @InjectRepository(Demo) private demoRepository: Repository<Demo>
  ) {}

  async getDemos(demo: Demo): Promise<Demo[]> {
    return await this.demoRepository.find();
  }

  async getDemo(_id: number): Promise<Demo[]> {
    return await this.demoRepository.find({
      select: ['name'],
      where: [{ id_demo: _id }]
    });
  }

  async postDemo(demo: Demo) {
    this.demoRepository.create(demo);
  }

  async updateDemo(demo: Demo) {
    this.demoRepository.save(demo);
  }

  async deleteDemo(demo: Demo) {
    this.demoRepository.delete(demo);
  }
}
