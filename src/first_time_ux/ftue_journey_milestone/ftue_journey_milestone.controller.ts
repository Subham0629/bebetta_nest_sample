import { Controller, Get, Post, Body, Param, Query, Put } from '@nestjs/common';
import { FtueJourneyMilestoneService } from './ftue_journey_milestone.service';
import { CreateFtueJourneyMilestoneDto } from './dto/create-ftue_journey_milestone.dto';
import { UpdateFtueJourneyMilestoneDto } from './dto/update-ftue_journey_milestone.dto';
import { FilterFtueJourneyMilestoneDto } from './dto/filter-ftue_journey_milestone.dto';
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('ftue-journey-milestones')
@Controller('ftue-journey-milestones')
export class FtueJourneyMilestoneController {
  constructor(
    private readonly ftueJourneyMilestoneService: FtueJourneyMilestoneService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new FTUE journey milestone' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        journey_id: { type: 'number', example: 1 },
        category_id: { type: 'number', example: 2 },
        name: { type: 'string', example: 'First Milestone' },
        display_name: { type: 'string', example: 'First Milestone Display' },
        level: { type: 'number', example: 1 },
        is_active: { type: 'boolean', example: true },
        reward_currency: { type: 'number', example: 1 },
        reward_units: { type: 'number', example: 10 },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'The FTUE journey milestone has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createFtueJourneyMilestoneDto: CreateFtueJourneyMilestoneDto) {
    return this.ftueJourneyMilestoneService.create(
      createFtueJourneyMilestoneDto,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get all FTUE journey milestones' })
  @ApiQuery({
    name: 'query',
    required: false,
    type: FilterFtueJourneyMilestoneDto,
  })
  @ApiResponse({
    status: 200,
    description: 'List of all FTUE journey milestones.',
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  findAll(@Query() query: FilterFtueJourneyMilestoneDto) {
    return this.ftueJourneyMilestoneService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an FTUE journey milestone by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the FTUE journey milestone',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'The found FTUE journey milestone.',
  })
  @ApiResponse({
    status: 404,
    description: 'FTUE journey milestone not found.',
  })
  findOne(@Param('id') id: string) {
    return this.ftueJourneyMilestoneService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an FTUE journey milestone by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the FTUE journey milestone',
    example: 1,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        journey_id: { type: 'number', example: 1 },
        category_id: { type: 'number', example: 2 },
        name: { type: 'string', example: 'Updated Milestone' },
        display_name: { type: 'string', example: 'Updated Milestone Display' },
        level: { type: 'number', example: 2 },
        is_active: { type: 'boolean', example: true },
        reward_currency: { type: 'number', example: 200 },
        reward_units: { type: 'number', example: 20 },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'The updated FTUE journey milestone.',
  })
  @ApiResponse({
    status: 404,
    description: 'FTUE journey milestone not found.',
  })
  update(
    @Param('id') id: string,
    @Body() updateFtueJourneyMilestoneDto: UpdateFtueJourneyMilestoneDto,
  ) {
    return this.ftueJourneyMilestoneService.update(
      +id,
      updateFtueJourneyMilestoneDto,
    );
  }
}
