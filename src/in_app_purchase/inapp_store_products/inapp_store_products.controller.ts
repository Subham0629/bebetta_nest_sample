import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { InappStoreProductsService } from './inapp_store_products.service';
import { CreateInappStoreProductDto } from './dto/create-inapp_store_product.dto';
import { UpdateInappStoreProductDto } from './dto/update-inapp_store_product.dto';

@Controller('inapp-store-products')
export class InappStoreProductsController {
  constructor(private readonly inappStoreProductsService: InappStoreProductsService) {}

  @Post()
  create(@Body() createInappStoreProductDto: CreateInappStoreProductDto) {
    return this.inappStoreProductsService.create(createInappStoreProductDto);
  }

  @Get()
  findAll() {
    return this.inappStoreProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inappStoreProductsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateInappStoreProductDto: UpdateInappStoreProductDto) {
    return this.inappStoreProductsService.update(+id, updateInappStoreProductDto);
  }

  
}
