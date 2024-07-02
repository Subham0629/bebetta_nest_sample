import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { InappStoreProductVariantsService } from './inapp_store_product_variants.service';
import { CreateInappStoreProductVariantDto } from './dto/create-inapp_store_product_variant.dto';
import { UpdateInappStoreProductVariantDto } from './dto/update-inapp_store_product_variant.dto';
import { FilterInappStoreProductVariantDto } from './dto/filter-inapp_store_product_variant.dto';

@Controller('inapp-store-product-variants')
export class InappStoreProductVariantsController {
  inappStoreProductVariantService: any;
  constructor(private readonly inappStoreProductVariantsService: InappStoreProductVariantsService) {}

  @Post()
  create(@Body() createInappStoreProductVariantDto: CreateInappStoreProductVariantDto) {
    return this.inappStoreProductVariantsService.create(createInappStoreProductVariantDto);
  }

  @Get()
  findAll(@Query() query: FilterInappStoreProductVariantDto) {
    return this.inappStoreProductVariantsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inappStoreProductVariantsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateInappStoreProductVariantDto: UpdateInappStoreProductVariantDto) {
    return this.inappStoreProductVariantsService.update(+id, updateInappStoreProductVariantDto);
  }

  
}
