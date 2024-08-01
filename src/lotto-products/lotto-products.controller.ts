import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { LottoProductsService } from './lotto-products.service';
import { CreateLottoProductDto } from './dto/create-lotto-product.dto';
import { UpdateLottoProductDto } from './dto/update-lotto-product.dto';

@Controller('lotto-products')
export class LottoProductsController {
  constructor(private readonly lottoProductsService: LottoProductsService) {}

  @Post()
  create(@Body() createLottoProductDto: CreateLottoProductDto) {
    return this.lottoProductsService.create(createLottoProductDto);
  }

  @Get()
  findAll() {
    return this.lottoProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lottoProductsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLottoProductDto: UpdateLottoProductDto) {
    return this.lottoProductsService.update(+id, updateLottoProductDto);
  }

}
