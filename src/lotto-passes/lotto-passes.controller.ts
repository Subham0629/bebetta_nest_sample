import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { LottoPassesService } from './lotto-passes.service';
import { CreateLottoPassDto } from './dto/create-lotto-pass.dto';
import { UpdateLottoPassDto } from './dto/update-lotto-pass.dto';

@Controller('lotto-passes')
export class LottoPassesController {
  constructor(private readonly lottoPassesService: LottoPassesService) {}

  @Post()
  create(@Body() createLottoPassDto: CreateLottoPassDto) {
    return this.lottoPassesService.create(createLottoPassDto);
  }

  @Get()
  findAll(
    @Query('variant_id') variant_id: number,
    @Query('searchTerm') searchTerm?: string,
    @Query('page') page = 1, 
    @Query('limit') limit = 10 
  ) {
    return this.lottoPassesService.findAll(+variant_id, searchTerm, +page, +limit);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.lottoPassesService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLottoPassDto: UpdateLottoPassDto) {
    return this.lottoPassesService.update(+id, updateLottoPassDto);
  }

  @Post('create-multiple')
  createMultiple(@Query('product_id') product_id: string) {
    return this.lottoPassesService.createMultiplePasses(parseInt(product_id, 10));
  }

  @Get('random-passes')
  async getRandomPassNumbers(
    @Query('variant_id') variant_id: number,
    @Query('rank') rank: number,
    @Query('winners_count') winners_count: number
  ) {
    return this.lottoPassesService.getRandomPassNumbers(+variant_id, +rank, +winners_count);
  }
}
