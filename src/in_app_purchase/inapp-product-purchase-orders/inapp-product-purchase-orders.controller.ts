import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { InappProductPurchaseOrdersService } from './inapp-product-purchase-orders.service';
import { CreateInappProductPurchaseOrderDto } from './dto/create-inapp-product-purchase-order.dto';
import { UpdateInappProductPurchaseOrderDto } from './dto/update-inapp-product-purchase-order.dto';
import { FilterInappProductPurchaseOrderDto } from './dto/filter-inapp-product-purchase-order.dto';
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('inapp-product-purchase-orders')
@Controller('inapp-product-purchase-orders')
export class InappProductPurchaseOrdersController {
  constructor(
    private readonly inappProductPurchaseOrdersService: InappProductPurchaseOrdersService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new in-app product purchase order' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        user_id: { type: 'number', example: 1 },
        product_id: { type: 'number', example: 2 },
        variant_id: { type: 'number', example: 3 },
        price_units: { type: 'number', example: 100 },
        currency_id: { type: 'number', example: 4 },
        details: { type: 'string', example: 'Additional details' },
        is_active: { type: 'boolean', example: true },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description:
      'The in-app product purchase order has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(
    @Body()
    createInappProductPurchaseOrderDto: CreateInappProductPurchaseOrderDto,
  ) {
    return this.inappProductPurchaseOrdersService.create(
      createInappProductPurchaseOrderDto,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get all in-app product purchase orders' })
  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterInappProductPurchaseOrderDto,
  })
  @ApiResponse({
    status: 200,
    description: 'List of all in-app product purchase orders.',
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  findAll(@Query() query: FilterInappProductPurchaseOrderDto) {
    return this.inappProductPurchaseOrdersService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an in-app product purchase order by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the in-app product purchase order',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'The found in-app product purchase order.',
  })
  @ApiResponse({
    status: 404,
    description: 'In-app product purchase order not found.',
  })
  findOne(@Param('id') id: string) {
    return this.inappProductPurchaseOrdersService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an in-app product purchase order by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the in-app product purchase order',
    example: 1,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        user_id: { type: 'number', example: 1 },
        product_id: { type: 'number', example: 2 },
        variant_id: { type: 'number', example: 3 },
        price_units: { type: 'number', example: 100 },
        currency_id: { type: 'number', example: 4 },
        details: { type: 'string', example: 'Updated additional details' },
        is_active: { type: 'boolean', example: true },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'The updated in-app product purchase order.',
  })
  @ApiResponse({
    status: 404,
    description: 'In-app product purchase order not found.',
  })
  update(
    @Param('id') id: string,
    @Body()
    updateInappProductPurchaseOrderDto: UpdateInappProductPurchaseOrderDto,
  ) {
    return this.inappProductPurchaseOrdersService.update(
      +id,
      updateInappProductPurchaseOrderDto,
    );
  }
}
