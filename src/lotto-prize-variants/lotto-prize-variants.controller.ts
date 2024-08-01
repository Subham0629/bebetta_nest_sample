import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { LottoPrizeVariantsService } from './lotto-prize-variants.service';
import { CreateLottoPrizeVariantDto } from './dto/create-lotto-prize-variant.dto';
import { UpdateLottoPrizeVariantDto } from './dto/update-lotto-prize-variant.dto';

@Controller('lotto-prize-variants')
export class LottoPrizeVariantsController {
  constructor(private readonly lottoPrizeVariantsService: LottoPrizeVariantsService) {}

  @Post()
  create(@Body() createLottoPrizeVariantDto: CreateLottoPrizeVariantDto) {
    return this.lottoPrizeVariantsService.create(createLottoPrizeVariantDto);
  }

  @Get()
  findAll() {
    return this.lottoPrizeVariantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lottoPrizeVariantsService.findOne(+id);
  }

  @Get('variant/:variant_id')
  async getByVariantId(@Param('variant_id', ParseIntPipe) variant_id: number) {
    return this.lottoPrizeVariantsService.findByVariantId(variant_id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLottoPrizeVariantDto: UpdateLottoPrizeVariantDto) {
    return this.lottoPrizeVariantsService.update(+id, updateLottoPrizeVariantDto);
  }

}
