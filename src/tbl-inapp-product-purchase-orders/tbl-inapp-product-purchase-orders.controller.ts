import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { TblInappProductPurchaseOrdersService } from './tbl-inapp-product-purchase-orders.service';
import { CreateTblInappProductPurchaseOrderDto } from './dto/create-tbl-inapp-product-purchase-order.dto';
import { UpdateTblInappProductPurchaseOrderDto } from './dto/update-tbl-inapp-product-purchase-order.dto';
import { FilterTblInappProductPurchaseOrderDto } from './dto/filter-tbl-inapp-product-purchase-order.dto';

@Controller('inapp-product-purchase-orders')
export class TblInappProductPurchaseOrdersController {
  constructor(
    private readonly tblInappProductPurchaseOrdersService: TblInappProductPurchaseOrdersService,
  ) {}

  @Post()
  create(
    @Body()
    createTblInappProductPurchaseOrderDto: CreateTblInappProductPurchaseOrderDto,
  ) {
    return this.tblInappProductPurchaseOrdersService.create(
      createTblInappProductPurchaseOrderDto,
    );
  }

  @Get()
  findAll(@Query() query: FilterTblInappProductPurchaseOrderDto) {
    return this.tblInappProductPurchaseOrdersService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tblInappProductPurchaseOrdersService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateTblInappProductPurchaseOrderDto: UpdateTblInappProductPurchaseOrderDto,
  ) {
    return this.tblInappProductPurchaseOrdersService.update(
      +id,
      updateTblInappProductPurchaseOrderDto,
    );
  }
}
