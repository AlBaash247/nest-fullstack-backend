import { Test, TestingModule } from '@nestjs/testing';
import { MyHttpExampleController } from './my-http-example.controller.js';
import { MyHttpExampleService } from './my-http-example.service.js';

describe('MyHttpExampleController', () => {
  let controller: MyHttpExampleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyHttpExampleController],
      providers: [MyHttpExampleService],
    }).compile();

    controller = module.get<MyHttpExampleController>(MyHttpExampleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
