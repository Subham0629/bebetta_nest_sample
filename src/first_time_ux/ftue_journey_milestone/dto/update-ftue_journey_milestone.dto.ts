import { PartialType } from '@nestjs/mapped-types';
import { CreateFtueJourneyMilestoneDto } from './create-ftue_journey_milestone.dto';

export class UpdateFtueJourneyMilestoneDto extends PartialType(CreateFtueJourneyMilestoneDto) {}
