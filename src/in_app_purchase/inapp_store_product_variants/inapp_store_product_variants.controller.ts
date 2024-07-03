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
import { InappStoreProductVariantsService } from './inapp_store_product_variants.service';
import { CreateInappStoreProductVariantDto } from './dto/create-inapp_store_product_variant.dto';
import { UpdateInappStoreProductVariantDto } from './dto/update-inapp_store_product_variant.dto';
import { FilterInappStoreProductVariantDto } from './dto/filter-inapp_store_product_variant.dto';
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('inapp-store-product-variants')
@Controller('inapp-store-product-variants')
export class InappStoreProductVariantsController {
  inappStoreProductVariantService: any;
  constructor(
    private readonly inappStoreProductVariantsService: InappStoreProductVariantsService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new in-app store product variant' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        inapp_store_product_id: { type: 'number', example: 1 },
        display_name: { type: 'string', example: 'Premium Package' },
        description: {
          type: 'string',
          example: 'A premium package with extra features',
        },
        price_units: { type: 'number', example: 500 },
        icon_url: { type: 'string', example: 'https://example.com/icon.png' },
        is_active: { type: 'boolean', example: true },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description:
      'The in-app store product variant has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(
    @Body()
    createInappStoreProductVariantDto: CreateInappStoreProductVariantDto,
  ) {
    return this.inappStoreProductVariantsService.create(
      createInappStoreProductVariantDto,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get all in-app store product variants' })
  @ApiResponse({
    status: 200,
    description: 'List of all in-app store product variants.',
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  findAll(@Query() query: FilterInappStoreProductVariantDto) {
    return this.inappStoreProductVariantsService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an in-app store product variant by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the in-app store product variant',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'The found in-app store product variant.',
  })
  @ApiResponse({
    status: 404,
    description: 'In-app store product variant not found.',
  })
  findOne(@Param('id') id: string) {
    return this.inappStoreProductVariantsService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an in-app store product variant by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the in-app store product variant',
    example: 1,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        inapp_store_product_id: { type: 'number', example: 1 },
        display_name: { type: 'string', example: 'Premium Package' },
        description: {
          type: 'string',
          example: 'A premium package with extra features',
        },
        price_units: { type: 'number', example: 500 },
        icon_url: { type: 'string', example: 'https://example.com/icon.png' },
        is_active: { type: 'boolean', example: true },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'The updated in-app store product variant.',
  })
  @ApiResponse({
    status: 404,
    description: 'In-app store product variant not found.',
  })
  update(
    @Param('id') id: string,
    @Body()
    updateInappStoreProductVariantDto: UpdateInappStoreProductVariantDto,
  ) {
    return this.inappStoreProductVariantsService.update(
      +id,
      updateInappStoreProductVariantDto,
    );
  }
}
