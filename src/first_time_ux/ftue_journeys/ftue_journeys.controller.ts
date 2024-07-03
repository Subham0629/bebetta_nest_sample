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

@Controller('ftue-journeys')
export class FtueJourneysController {
  constructor(private readonly ftueJourneysService: FtueJourneysService) {}

  @Post()
  create(@Body() createFtueJourneyDto: CreateFtueJourneyDto) {
    return this.ftueJourneysService.create(createFtueJourneyDto);
  }

  @Get()
  findAll(@Query() query: FilterFtueJourneyDto) {
    return this.ftueJourneysService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ftueJourneysService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateFtueJourneyDto: UpdateFtueJourneyDto,
  ) {
    return this.ftueJourneysService.update(+id, updateFtueJourneyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ftueJourneysService.remove(+id);
  }
}
