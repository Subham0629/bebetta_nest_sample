import { PartialType } from '@nestjs/mapped-types';
import { CreateFtueUserJourneyMilestoneDto } from './create-ftue_user_journey_milestone.dto';

export class UpdateFtueUserJourneyMilestoneDto extends PartialType(CreateFtueUserJourneyMilestoneDto) {}
