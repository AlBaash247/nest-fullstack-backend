import { Module } from '@nestjs/common';
import { MyHttpExampleService } from './my-http-example.service.js';
import { MyHttpExampleController } from './my-http-example.controller.js';

@Module({
  controllers: [MyHttpExampleController],
  providers: [MyHttpExampleService],
})
export class MyHttpExampleModule {}
