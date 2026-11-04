import { Controller, Get, Post, Body, Patch, Param, Delete,ValidationPipe } from '@nestjs/common';
import { CatsService } from './cats.service.js';
import { CreateCatDto } from './dto/create-cat.dto.js';
import { UpdateCatDto } from './dto/update-cat.dto.js';
import { CatDecorator } from './entities/cat.decorator.js';
import { CatEntity } from './entities/cat.entity.js';

const validationPipe: ValidationPipe = new ValidationPipe({ validateCustomDecorators: true });

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(
    @CatDecorator(validationPipe) cat : CatEntity
  ) {
    return this.catsService.findOne(cat.id);
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
