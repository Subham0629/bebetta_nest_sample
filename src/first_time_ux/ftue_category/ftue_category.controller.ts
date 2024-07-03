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
import { FtueCategoryService } from './ftue_category.service';
import { CreateFtueCategoryDto } from './dto/create-ftue_category.dto';
import { UpdateFtueCategoryDto } from './dto/update-ftue_category.dto';
import { FilterFtueCategoryDto } from './dto/filter-ftue_category.dto';
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('ftue-category')
@Controller('ftue-category')
export class FtueCategoryController {
  constructor(private readonly ftueCategoryService: FtueCategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new FTUE category' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        type: { type: 'string', example: 'onboarding' },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'The FTUE category has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createFtueCategoryDto: CreateFtueCategoryDto) {
    return this.ftueCategoryService.create(createFtueCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all FTUE categories' })
  @ApiQuery({ name: 'query', required: false, type: FilterFtueCategoryDto })
  @ApiResponse({ status: 200, description: 'List of all FTUE categories.' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  findAll(@Query() query: FilterFtueCategoryDto) {
    return this.ftueCategoryService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an FTUE category by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the FTUE category',
    example: 1,
  })
  @ApiResponse({ status: 200, description: 'The found FTUE category.' })
  @ApiResponse({ status: 404, description: 'FTUE category not found.' })
  findOne(@Param('id') id: string) {
    return this.ftueCategoryService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an FTUE category by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the FTUE category',
    example: 1,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        type: { type: 'string', example: 'onboarding' },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'The updated FTUE category.' })
  @ApiResponse({ status: 404, description: 'FTUE category not found.' })
  update(
    @Param('id') id: string,
    @Body() updateFtueCategoryDto: UpdateFtueCategoryDto,
  ) {
    return this.ftueCategoryService.update(+id, updateFtueCategoryDto);
  }
}
