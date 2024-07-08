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
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('inapp-product-purchase-redemption')
@Controller('inapp-product-purchase-redemption')
export class InappProductPurchaseRedemptionController {
  constructor(
    private readonly inappProductPurchaseRedemptionService: InappProductPurchaseRedemptionService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new in-app product purchase redemption' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        order_id: { type: 'number', example: 1 },
        activate_at: {
          type: 'string',
          format: 'date-time',
          example: '2024-07-03T12:34:56Z',
        },
        is_active: { type: 'boolean', example: true },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description:
      'The in-app product purchase redemption has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(
    @Body()
    createInappProductPurchaseRedemptionDto: CreateInappProductPurchaseRedemptionDto,
  ) {
    return this.inappProductPurchaseRedemptionService.create(
      createInappProductPurchaseRedemptionDto,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get all in-app product purchase redemptions' })
  @ApiQuery({ name: 'sort', required: false, type: String, example: 'id' })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 3 })
  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterInappProductPurchaseRedemptionDto,
  })
  @ApiResponse({
    status: 200,
    description: 'List of all in-app product purchase redemptions.',
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  findAll(@Query() query: FilterInappProductPurchaseRedemptionDto) {
    return this.inappProductPurchaseRedemptionService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an in-app product purchase redemption by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the in-app product purchase redemption',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'The found in-app product purchase redemption.',
  })
  @ApiResponse({
    status: 404,
    description: 'In-app product purchase redemption not found.',
  })
  findOne(@Param('id') id: string) {
    return this.inappProductPurchaseRedemptionService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update an in-app product purchase redemption by ID',
  })
  @ApiParam({
    name: 'id',
    description: 'The ID of the in-app product purchase redemption',
    example: 1,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        order_id: { type: 'number', example: 1 },
        activate_at: {
          type: 'string',
          format: 'date-time',
          example: '2024-07-03T12:34:56Z',
        },
        is_active: { type: 'boolean', example: true },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'The updated in-app product purchase redemption.',
  })
  @ApiResponse({
    status: 404,
    description: 'In-app product purchase redemption not found.',
  })
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
