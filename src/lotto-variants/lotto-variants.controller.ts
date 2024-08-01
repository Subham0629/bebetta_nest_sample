import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { LottoVariantsService } from './lotto-variants.service';
import { CreateLottoVariantDto } from './dto/create-lotto-variant.dto';
import { UpdateLottoVariantDto } from './dto/update-lotto-variant.dto';

@Controller('lotto-variants')
export class LottoVariantsController {
  constructor(private readonly lottoVariantsService: LottoVariantsService) {}

  @Post()
  create(@Body() createLottoVariantDto: CreateLottoVariantDto) {
    return this.lottoVariantsService.create(createLottoVariantDto);
  }

  @Get()
  findAll() {
    return this.lottoVariantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lottoVariantsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLottoVariantDto: UpdateLottoVariantDto) {
    return this.lottoVariantsService.update(+id, updateLottoVariantDto);
  }

}
