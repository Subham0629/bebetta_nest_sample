import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { FtueUserJourneyMilestonesService } from './ftue_user_journey_milestones.service';
import { CreateFtueUserJourneyMilestoneDto } from './dto/create-ftue_user_journey_milestone.dto';
import { UpdateFtueUserJourneyMilestoneDto } from './dto/update-ftue_user_journey_milestone.dto';
import { FilterFtueUserJourneyMilestoneDto } from './dto/filter-ftue_user_journey_milestone.dto';
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('ftue-user-journey-milestones')
@Controller('ftue-user-journey-milestones')
export class FtueUserJourneyMilestonesController {
  constructor(
    private readonly ftueUserJourneyMilestonesService: FtueUserJourneyMilestonesService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new FTUE user journey milestone' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        user_id: { type: 'integer', example: 1 },
        journey_id: { type: 'integer', example: 1 },
        last_completed_milestone_id: { type: 'integer', example: 0 },
        rewards_collected: { type: 'integer', example: 0 },
        is_active: { type: 'boolean', example: true },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description:
      'The FTUE user journey milestone has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(
    @Body()
    createFtueUserJourneyMilestoneDto: CreateFtueUserJourneyMilestoneDto,
  ) {
    return this.ftueUserJourneyMilestonesService.create(
      createFtueUserJourneyMilestoneDto,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get all FTUE user journey milestones' })
  @ApiQuery({ name: 'sort', required: false, type: String, example: 'id' })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 3 })
  @ApiResponse({
    status: 200,
    description: 'List of all FTUE user journey milestones.',
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  findAll(@Query() query: FilterFtueUserJourneyMilestoneDto) {
    return this.ftueUserJourneyMilestonesService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an FTUE user journey milestone by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the FTUE user journey milestone',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'The found FTUE user journey milestone.',
  })
  @ApiResponse({
    status: 404,
    description: 'FTUE user journey milestone not found.',
  })
  findOne(@Param('id') id: string) {
    return this.ftueUserJourneyMilestonesService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an FTUE user journey milestone by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the FTUE user journey milestone',
    example: 1,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        user_id: { type: 'integer', example: 1 },
        journey_id: { type: 'integer', example: 1 },
        last_completed_milestone_id: { type: 'integer', example: 1 },
        rewards_collected: { type: 'integer', example: 0 },
        is_active: { type: 'boolean', example: true },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'The updated FTUE user journey milestone.',
  })
  @ApiResponse({
    status: 404,
    description: 'FTUE user journey milestone not found.',
  })
  update(
    @Param('id') id: string,
    @Body()
    updateFtueUserJourneyMilestoneDto: UpdateFtueUserJourneyMilestoneDto,
  ) {
    return this.ftueUserJourneyMilestonesService.update(
      +id,
      updateFtueUserJourneyMilestoneDto,
    );
  }
}
