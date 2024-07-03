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
import { FtueJourneysService } from './ftue_journeys.service';
import { CreateFtueJourneyDto } from './dto/create-ftue_journey.dto';
import { UpdateFtueJourneyDto } from './dto/update-ftue_journey.dto';
import { FilterFtueJourneyDto } from './dto/filter-ftue_journey.dto';
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('ftue-journeys')
@Controller('ftue-journeys')
export class FtueJourneysController {
  constructor(private readonly ftueJourneysService: FtueJourneysService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new FTUE journey' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        expiry_time: { type: 'string', example: '2024-12-31T23:59:59Z' },
        is_active: { type: 'boolean', example: true },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'The FTUE journey has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createFtueJourneyDto: CreateFtueJourneyDto) {
    return this.ftueJourneysService.create(createFtueJourneyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all FTUE journeys' })
  @ApiQuery({ name: 'query', required: false, type: FilterFtueJourneyDto })
  @ApiResponse({ status: 200, description: 'List of all FTUE journeys.' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  findAll(@Query() query: FilterFtueJourneyDto) {
    return this.ftueJourneysService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an FTUE journey by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the FTUE journey',
    example: 1,
  })
  @ApiResponse({ status: 200, description: 'The found FTUE journey.' })
  @ApiResponse({ status: 404, description: 'FTUE journey not found.' })
  findOne(@Param('id') id: string) {
    return this.ftueJourneysService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an FTUE journey by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the FTUE journey',
    example: 1,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        expiry_time: { type: 'string', example: '2024-12-31T23:59:59Z' },
        is_active: { type: 'boolean', example: true },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'The updated FTUE journey.' })
  @ApiResponse({ status: 404, description: 'FTUE journey not found.' })
  update(
    @Param('id') id: string,
    @Body() updateFtueJourneyDto: UpdateFtueJourneyDto,
  ) {
    return this.ftueJourneysService.update(+id, updateFtueJourneyDto);
  }
}
