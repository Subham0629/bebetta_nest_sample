import { Controller, Get, Post, Body, Param, Query, Put } from '@nestjs/common';
import { FtueJourneyMilestoneService } from './ftue_journey_milestone.service';
import { CreateFtueJourneyMilestoneDto } from './dto/create-ftue_journey_milestone.dto';
import { UpdateFtueJourneyMilestoneDto } from './dto/update-ftue_journey_milestone.dto';
import { FilterFtueJourneyMilestoneDto } from './dto/filter-ftue_journey_milestone.dto';

@Controller('ftue-journey-milestones')
export class FtueJourneyMilestoneController {
  constructor(
    private readonly ftueJourneyMilestoneService: FtueJourneyMilestoneService,
  ) {}

  @Post()
  create(@Body() createFtueJourneyMilestoneDto: CreateFtueJourneyMilestoneDto) {
    return this.ftueJourneyMilestoneService.create(
      createFtueJourneyMilestoneDto,
    );
  }

  @Get()
  findAll(@Query() query: FilterFtueJourneyMilestoneDto) {
    return this.ftueJourneyMilestoneService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ftueJourneyMilestoneService.findOne(+id);
  }

  @Put(':id')
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
