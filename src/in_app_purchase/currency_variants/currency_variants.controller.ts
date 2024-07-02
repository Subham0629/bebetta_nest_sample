import { Controller, Get, Post, Body, Put, Param, Delete,Query } from '@nestjs/common';
import { CurrencyVariantsService } from './currency_variants.service';
import { CreateCurrencyVariantDto } from './dto/create-currency_variant.dto';
import { UpdateCurrencyVariantDto } from './dto/update-currency_variant.dto';

@Controller('currency-variants')
export class CurrencyVariantsController {
  constructor(private readonly currencyVariantsService: CurrencyVariantsService) {}

  @Post()
  create(@Body() createCurrencyVariantDto: CreateCurrencyVariantDto) {
    return this.currencyVariantsService.create(createCurrencyVariantDto);
  }

  @Get()
  findAll() {
    return this.currencyVariantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.currencyVariantsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCurrencyVariantDto: UpdateCurrencyVariantDto) {
    return this.currencyVariantsService.update(+id, updateCurrencyVariantDto);
  }

}
