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
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';
import { CurrencyVariantsService } from './currency_variants.service';
import { CreateCurrencyVariantDto } from './dto/create-currency_variant.dto';
import { FilterCurrencyVariantDto } from './dto/filter-currency_variant.dto';
import { UpdateCurrencyVariantDto } from './dto/update-currency_variant.dto';

@ApiTags('currency-variants')
@Controller('currency-variants')
export class CurrencyVariantsController {
  constructor(
    private readonly currencyVariantsService: CurrencyVariantsService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new currency variant' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        currency_id: { type: 'number', example: 1 },
        variant: {
          type: 'string',
          enum: ['s', 'm', 'l', 'xl', 'xxl', 'silver', 'gold', 'platinum'],
          example: 'gold',
        },
        exchange_rate: { type: 'number', example: 1000 },
        is_active: { type: 'boolean', example: true },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'The currency variant has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createCurrencyVariantDto: CreateCurrencyVariantDto) {
    return this.currencyVariantsService.create(createCurrencyVariantDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all currency variants' })
  @ApiResponse({ status: 200, description: 'List of all currency variants.' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  findAll(@Query() query: FilterCurrencyVariantDto) {
    return this.currencyVariantsService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a currency variant by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the currency variant',
    example: 3,
  })
  @ApiResponse({ status: 200, description: 'The found currency variant.' })
  @ApiResponse({ status: 404, description: 'Currency variant not found.' })
  findOne(@Param('id') id: string) {
    return this.currencyVariantsService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a currency variant by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the currency variant',
    example: 3,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        currency_id: { type: 'number', example: 1 },
        variant: {
          type: 'string',
          enum: ['s', 'm', 'l', 'xl', 'xxl', 'silver', 'gold', 'platinum'],
          example: 'gold',
        },
        exchange_rate: { type: 'number', example: 1000 },
        is_active: { type: 'boolean', example: true },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'The updated currency variant.' })
  @ApiResponse({ status: 404, description: 'Currency variant not found.' })
  update(
    @Param('id') id: string,
    @Body() updateCurrencyVariantDto: UpdateCurrencyVariantDto,
  ) {
    return this.currencyVariantsService.update(+id, updateCurrencyVariantDto);
  }
}
