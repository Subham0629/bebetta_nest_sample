// currencies.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CurrenciesService } from './currencies.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { FilterCurrencyDto } from './dto/filter-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';

@ApiTags('currencies')
@Controller('currencies')
export class CurrenciesController {
  constructor(private readonly currenciesService: CurrenciesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new currency' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        type: { type: 'string', enum: ['coin', 'key'], example: 'coin' },
        name: { type: 'string', example: 'Bitcoin' },
        display_name: { type: 'string', example: 'BTC' },
        is_active: { type: 'boolean', example: true },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'The currency has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createCurrencyDto: CreateCurrencyDto) {
    return this.currenciesService.create(createCurrencyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all currencies' })
  @ApiResponse({ status: 200, description: 'List of all currencies.' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  findAll(@Query() query: FilterCurrencyDto) {
    return this.currenciesService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a currency by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the currency', example: 1 })
  @ApiResponse({ status: 200, description: 'The found currency.' })
  @ApiResponse({ status: 404, description: 'Currency not found.' })
  findOne(@Param('id') id: string) {
    return this.currenciesService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a currency by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the currency', example: 1 })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        type: { type: 'string', enum: ['coin', 'key'], example: 'coin' },
        name: { type: 'string', example: 'Bitcoin' },
        display_name: { type: 'string', example: 'BTC' },
        is_active: { type: 'boolean', example: true },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'The updated currency.' })
  @ApiResponse({ status: 404, description: 'Currency not found.' })
  update(
    @Param('id') id: string,
    @Body() updateCurrencyDto: UpdateCurrencyDto,
  ) {
    return this.currenciesService.update(+id, updateCurrencyDto);
  }


}
