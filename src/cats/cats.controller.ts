import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, Query } from '@nestjs/common';
import { CatsService } from './cats.service.js';
import { CreateCatDto } from './dto/create-cat.dto.js';
import { UpdateCatDto } from './dto/update-cat.dto.js';
import { CatDecorator } from './entities/cat.decorator.js';
import { CatEntity } from './entities/cat.entity.js';
import { CommonDecorator } from '../common/common.decorator.js';

// import { CommonDecorator } from '../common/common.decorator.js';
const validationPipe: ValidationPipe = new ValidationPipe({ validateCustomDecorators: true });

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }


  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }
  
  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  // @Get('filtered')
  // async findAllFiltered(@Query('age') age: number, @Query('breed') breed: string) {
  //   return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
  // }


  @Get(':id')
  findOne(
    @CommonDecorator(validationPipe) cat: CatEntity
  ) {
      return "mwAW";
    // return this.catsService.findOne(cat.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
