import { Injectable } from '@nestjs/common';
import { CreateMyHttpExampleDto } from './dto/create-my-http-example.dto.js';
import { UpdateMyHttpExampleDto } from './dto/update-my-http-example.dto.js';

@Injectable()
export class MyHttpExampleService {
  create(createMyHttpExampleDto: CreateMyHttpExampleDto) {
    return 'This action adds a new myHttpExample';
  }

  findAll() {
    return `This action returns all myHttpExample`;
  }

  findOne(id: number) {
    return `This action returns a #${id} myHttpExample`;
  }

  update(id: number, updateMyHttpExampleDto: UpdateMyHttpExampleDto) {
    return `This action updates a #${id} myHttpExample`;
  }

  remove(id: number) {
    return `This action removes a #${id} myHttpExample`;
  }
}
