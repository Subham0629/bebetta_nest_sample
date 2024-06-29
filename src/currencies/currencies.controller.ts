// currencies.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CurrenciesService } from './currencies.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';

@Controller('currencies')
export class CurrenciesController {
  constructor(private readonly currenciesService: CurrenciesService) {}

  @Post()
  create(@Body() createCurrencyDto: CreateCurrencyDto) {
    return this.currenciesService.create(createCurrencyDto);
  }

  @Get()
  findAll() {
    return this.currenciesService.findAll();
  }

  @Get(':id')
  findOne(@Body('id') id: string) {
    return this.currenciesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCurrencyDto: UpdateCurrencyDto) {
    return this.currenciesService.update(+id, updateCurrencyDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.currenciesService.remove(+id);
  // }
}
