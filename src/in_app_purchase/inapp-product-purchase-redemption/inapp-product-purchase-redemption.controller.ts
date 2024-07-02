import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { InappProductPurchaseRedemptionService } from './inapp-product-purchase-redemption.service';
import { CreateInappProductPurchaseRedemptionDto } from './dto/create-inapp-product-purchase-redemption.dto';
import { UpdateInappProductPurchaseRedemptionDto } from './dto/update-inapp-product-purchase-redemption.dto';
import { FilterInappProductPurchaseRedemptionDto } from './dto/filter-inapp-product-purchase-redemption.dto';

@Controller('inapp-product-purchase-redemption')
export class InappProductPurchaseRedemptionController {
  constructor(
    private readonly inappProductPurchaseRedemptionService: InappProductPurchaseRedemptionService,
  ) {}

  @Post()
  create(
    @Body()
    createInappProductPurchaseRedemptionDto: CreateInappProductPurchaseRedemptionDto,
  ) {
    return this.inappProductPurchaseRedemptionService.create(
      createInappProductPurchaseRedemptionDto,
    );
  }

  @Get()
  findAll(@Query() query: FilterInappProductPurchaseRedemptionDto) {
    return this.inappProductPurchaseRedemptionService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inappProductPurchaseRedemptionService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateInappProductPurchaseRedemptionDto: UpdateInappProductPurchaseRedemptionDto,
  ) {
    return this.inappProductPurchaseRedemptionService.update(
      +id,
      updateInappProductPurchaseRedemptionDto,
    );
  }
}
