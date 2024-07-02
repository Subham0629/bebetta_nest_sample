import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { InappProductPurchaseOrdersService } from './inapp-product-purchase-orders.service';
import { CreateInappProductPurchaseOrderDto } from './dto/create-inapp-product-purchase-order.dto';
import { UpdateInappProductPurchaseOrderDto } from './dto/update-inapp-product-purchase-order.dto';
import { FilterInappProductPurchaseOrderDto } from './dto/filter-inapp-product-purchase-order.dto';

@Controller('inapp-product-purchase-orders')
export class InappProductPurchaseOrdersController {
  constructor(private readonly inappProductPurchaseOrdersService: InappProductPurchaseOrdersService) {}

  @Post()
  create(@Body() createInappProductPurchaseOrderDto: CreateInappProductPurchaseOrderDto) {
    return this.inappProductPurchaseOrdersService.create(createInappProductPurchaseOrderDto);
  }

  @Get()
  findAll(@Query() query: FilterInappProductPurchaseOrderDto) {
    return this.inappProductPurchaseOrdersService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inappProductPurchaseOrdersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateInappProductPurchaseOrderDto: UpdateInappProductPurchaseOrderDto) {
    return this.inappProductPurchaseOrdersService.update(+id, updateInappProductPurchaseOrderDto);
  }

}
