import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { MyHttpExampleService } from './my-http-example.service.js';
import { CreateMyHttpExampleDto } from './dto/create-my-http-example.dto.js';
import { UpdateMyHttpExampleDto } from './dto/update-my-http-example.dto.js';
import { MyHttpExampleDecorator } from './entities/my-http-example.decorator.js';
import { MyHttpExampleEntity } from './entities/my-http-example.entity.js';

@Controller('my-http-example')
export class MyHttpExampleController {
  constructor(private readonly myHttpExampleService: MyHttpExampleService) {}

  @Post()
  create(@Body() createMyHttpExampleDto: CreateMyHttpExampleDto) {
    return this.myHttpExampleService.create(createMyHttpExampleDto);
  }

  @Get()
  findAll() {
    return this.myHttpExampleService.findAll();
  }

  @Get(':id')
  //#1 findOne(@Param('id') id: string) {

  //#2 findOne(@MyHttpExample('firstName') firstName: string) {
    async findOne(
      @MyHttpExampleDecorator(new ValidationPipe({ validateCustomDecorators: true })) httpExample: MyHttpExampleEntity,
    ) {
      console.log(httpExample);
    
    //#1 return this.myHttpExampleService.findOne(myHttpExample);
    //#2 console.log(`Hello ${firstName}`);
    
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMyHttpExampleDto: UpdateMyHttpExampleDto) {
    return this.myHttpExampleService.update(+id, updateMyHttpExampleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.myHttpExampleService.remove(+id);
  }


@Get()
async findAll2(): Promise<MyHttpExampleEntity[]> {
  return [];
}

}


