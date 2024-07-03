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
import { BebettaGlobalConfigService } from './bebetta_global_config.service';
import { CreateBebettaGlobalConfigDto } from './dto/create-bebetta_global_config.dto';
import { UpdateBebettaGlobalConfigDto } from './dto/update-bebetta_global_config.dto';
import { FilterBebettaGlobalConfigDto } from './dto/filter-bebetta_global_config.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Global Config')
@Controller('bebetta-global-config')
export class BebettaGlobalConfigController {
  constructor(
    private readonly bebettaGlobalConfigService: BebettaGlobalConfigService,
  ) {}

  @Post()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        bucket: { type: 'string', example: 'name' },
        property_name: { type: 'string', example: 'dswcde' },
        property_value: { type: 'string', example: 'value123' },
        property_data_type: {
          type: 'string',
          enum: ['string', 'timestamp', 'integer', 'float', 'object'],
          example: 'string',
        },
        is_active: { type: 'boolean', example: true },
      },
    },
  })
  create(@Body() createBebettaGlobalConfigDto: CreateBebettaGlobalConfigDto) {
    return this.bebettaGlobalConfigService.create(createBebettaGlobalConfigDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all data from this api' })
  @ApiResponse({
    status: 200,
    description: 'All data list',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
  })
  findAll(@Query() query: FilterBebettaGlobalConfigDto) {
    return this.bebettaGlobalConfigService.findAll(query);
  }

  @Get(':id')
  @ApiParam({ name: 'id', example: 3 })
  findOne(@Param('id') id: string) {
    return this.bebettaGlobalConfigService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a global config by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the global config',
    example: 3,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        bucket: { type: 'string', example: 'updated Name' },
        property_name: { type: 'string', example: 'updatedName' },
        property_value: { type: 'string', example: 'updatedValue123' },
        property_data_type: {
          type: 'string',
          enum: ['string', 'timestamp', 'integer', 'float', 'object'],
          example: 'string',
        },
        is_active: { type: 'boolean', example: true },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'The updated record' })
  @ApiResponse({ status: 404, description: 'Record not found' })
  update(
    @Param('id') id: string,
    @Body() updateBebettaGlobalConfigDto: UpdateBebettaGlobalConfigDto,
  ) {
    return this.bebettaGlobalConfigService.update(
      +id,
      updateBebettaGlobalConfigDto,
    );
  }
}
