import { Test, TestingModule } from '@nestjs/testing';
import { MyHttpExampleService } from './my-http-example.service.js';

describe('MyHttpExampleService', () => {
  let service: MyHttpExampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyHttpExampleService],
    }).compile();

    service = module.get<MyHttpExampleService>(MyHttpExampleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
