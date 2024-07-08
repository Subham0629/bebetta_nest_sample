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
import { InappStoreProductsService } from './inapp_store_products.service';
import { CreateInappStoreProductDto } from './dto/create-inapp_store_product.dto';
import { UpdateInappStoreProductDto } from './dto/update-inapp_store_product.dto';
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';
import { FilterInappStoreProductDto } from './dto/filter-inapp_store_product.dto';

@ApiTags('inapp-store-products')
@Controller('inapp-store-products')
export class InappStoreProductsController {
  constructor(
    private readonly inappStoreProductsService: InappStoreProductsService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new in-app store product' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', example: 'Premium Package' },
        category: {
          type: 'string',
          enum: ['game', 'bids', 'rewards'],
          example: 'game',
        },
        display_name: { type: 'string', example: 'Premium Package' },
        description: {
          type: 'string',
          example: 'A premium package with extra features',
        },
        info_details_html: { type: 'string', example: '<p>Details</p>' },
        exchange_currency_id: { type: 'number', example: 1 },
        is_active: { type: 'boolean', example: true },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'The in-app store product has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createInappStoreProductDto: CreateInappStoreProductDto) {
    return this.inappStoreProductsService.create(createInappStoreProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all in-app store products' })
  @ApiResponse({
    status: 200,
    description: 'List of all in-app store products.',
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  findAll(@Query() query: FilterInappStoreProductDto) {
    return this.inappStoreProductsService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an in-app store product by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the in-app store product',
    example: 1,
  })
  @ApiResponse({ status: 200, description: 'The found in-app store product.' })
  @ApiResponse({ status: 404, description: 'In-app store product not found.' })
  findOne(@Param('id') id: string) {
    return this.inappStoreProductsService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an in-app store product by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the in-app store product',
    example: 1,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', example: 'Premium Package' },
        category: {
          type: 'string',
          enum: ['game', 'bids', 'rewards'],
          example: 'game',
        },
        display_name: { type: 'string', example: 'Premium Package' },
        description: {
          type: 'string',
          example: 'A premium package with extra features',
        },
        info_details_html: { type: 'string', example: '<p>Details</p>' },
        exchange_currency_id: { type: 'number', example: 1 },
        is_active: { type: 'boolean', example: true },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'The updated in-app store product.',
  })
  @ApiResponse({ status: 404, description: 'In-app store product not found.' })
  update(
    @Param('id') id: string,
    @Body() updateInappStoreProductDto: UpdateInappStoreProductDto,
  ) {
    return this.inappStoreProductsService.update(
      +id,
      updateInappStoreProductDto,
    );
  }
}
