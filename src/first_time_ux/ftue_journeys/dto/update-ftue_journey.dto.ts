import { PartialType } from '@nestjs/mapped-types';
import { CreateFtueJourneyDto } from './create-ftue_journey.dto';

export class UpdateFtueJourneyDto extends PartialType(CreateFtueJourneyDto) {}
