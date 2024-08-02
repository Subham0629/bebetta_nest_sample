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

  @Get('users-by-variant/:variant_id')
  async getUsersOrderCountByVariantId(
    @Param('variant_id') variant_id: string,
    @Query('page') page: string,
    @Query('limit') limit: string
  ) {
    const variantId = parseInt(variant_id, 10);
    const pageNum = parseInt(page, 10) || 1;
    const limitNum = parseInt(limit, 10) || 10;

return this.lottoPurchaseOrdersService.getUsersOrderCountByVariantId(variantId, pageNum, limitNum);
  }
  

  @Get('get-pass/:user_id/:variant_id')
  async findPassNumbersByUserAndVariant(
    @Param('user_id') user_id: string,
    @Param('variant_id') variant_id: string,
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    return this.lottoPurchaseOrdersService.findPassNumbersByUserAndVariant(
      parseInt(user_id, 10),
      parseInt(variant_id, 10),
      parseInt(page, 10),
      parseInt(limit, 10),
    );
  }

  @Get('get-winner/:variant_id/:win_rank')
  async findOrdersByVariantAndWinRank(
    @Param('variant_id') variant_id: string,
    @Param('win_rank') win_rank: string
  ) {
    return this.lottoPurchaseOrdersService.findOrdersByVariantAndWinRank(
      parseInt(variant_id, 10),
      parseInt(win_rank, 10)
    );
  }
}


