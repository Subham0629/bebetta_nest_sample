import { Controller, Get, Post, Body, Patch, Param, Delete, Put, BadRequestException, Query } from '@nestjs/common';
import { LottoPurchaseOrdersService } from './lotto-purchase-orders.service';
import { CreateLottoPurchaseOrderDto } from './dto/create-lotto-purchase-order.dto';
import { UpdateLottoPurchaseOrderDto } from './dto/update-lotto-purchase-order.dto';

@Controller('lotto-purchase-orders')
export class LottoPurchaseOrdersController {
  constructor(private readonly lottoPurchaseOrdersService: LottoPurchaseOrdersService) {}

  @Post()
  async create(@Body() createLottoPurchaseOrderDto: CreateLottoPurchaseOrderDto) {
    return this.lottoPurchaseOrdersService.create(createLottoPurchaseOrderDto);
  }

  @Get()
  async findAll() {
    return this.lottoPurchaseOrdersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.lottoPurchaseOrdersService.findOne(id);
  }

  @Get('variant/:variant_id')
  async findByVariant(@Param('variant_id') variant_id: number) {
    return this.lottoPurchaseOrdersService.findByVariant(variant_id);
  }

  @Put(':idOrPassNumber')
  async update(
    @Param('idOrPassNumber') idOrPassNumber: string,
    @Query('type') type: 'id' | 'pass_number',
    @Body() updateLottoPurchaseOrderDto: UpdateLottoPurchaseOrderDto,
  ) {
    let id: number | null = null;
    let pass_number: number | null = null;

    if (type === 'id') {
      id = parseInt(idOrPassNumber, 10);
      if (isNaN(id)) {
        throw new BadRequestException('Invalid id provided.');
      }
    } else if (type === 'pass_number') {
      pass_number = parseInt(idOrPassNumber, 10);
      if (isNaN(pass_number)) {
        throw new BadRequestException('Invalid pass_number provided.');
      }
    } else {
      throw new BadRequestException('Invalid type provided. It should be either "id" or "pass_number".');
    }

    return this.lottoPurchaseOrdersService.updateByIdOrPassNumber(id, pass_number, updateLottoPurchaseOrderDto);
  }
}


