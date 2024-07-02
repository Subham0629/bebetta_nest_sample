import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { FtueCategoryService } from './ftue_category.service';
import { CreateFtueCategoryDto } from './dto/create-ftue_category.dto';
import { UpdateFtueCategoryDto } from './dto/update-ftue_category.dto';
import { FilterFtueCategoryDto } from './dto/filter-ftue_category.dto';

@Controller('ftue-category')
export class FtueCategoryController {
  constructor(private readonly ftueCategoryService: FtueCategoryService) {}

  @Post()
  create(@Body() createFtueCategoryDto: CreateFtueCategoryDto) {
    return this.ftueCategoryService.create(createFtueCategoryDto);
  }

  @Get()
  findAll(@Query() query: FilterFtueCategoryDto) {
    return this.ftueCategoryService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ftueCategoryService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFtueCategoryDto: UpdateFtueCategoryDto) {
    return this.ftueCategoryService.update(+id, updateFtueCategoryDto);
  }

}
