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

@Controller('ftue-user-journey-milestones')
export class FtueUserJourneyMilestonesController {
  constructor(
    private readonly ftueUserJourneyMilestonesService: FtueUserJourneyMilestonesService,
  ) {}

  @Post()
  create(
    @Body()
    createFtueUserJourneyMilestoneDto: CreateFtueUserJourneyMilestoneDto,
  ) {
    return this.ftueUserJourneyMilestonesService.create(
      createFtueUserJourneyMilestoneDto,
    );
  }

  @Get()
  findAll(@Query() query: FilterFtueUserJourneyMilestoneDto) {
    return this.ftueUserJourneyMilestonesService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ftueUserJourneyMilestonesService.findOne(+id);
  }

  @Put(':id')
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
